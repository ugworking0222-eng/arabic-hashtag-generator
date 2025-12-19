const express = require('express');
const router = express.Router();
const {
  searchHashtags,
  generateHashtagsFromText,
  getAllCategories,
  getAllCountries
} = require('../utils/dataLoader');

/**
 * GET /api/hashtags/search
 * Search hashtags across all data
 * Query params: q (search query), type (country/category), limit
 */
router.get('/search', (req, res) => {
  try {
    const { q, type, limit = 50 } = req.query;
    
    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query (q) is required'
      });
    }
    
    const filters = type ? { type } : {};
    const results = searchHashtags(q, filters);
    
    // Flatten results and apply limit
    const allHashtags = [];
    results.forEach(result => {
      result.hashtags.forEach(tag => {
        allHashtags.push({
          hashtag: tag,
          source_type: result.type,
          source_name: result.name,
          source_name_ar: result.name_ar
        });
      });
    });
    
    const limited = allHashtags.slice(0, parseInt(limit));
    
    res.json({
      success: true,
      query: q,
      total_found: allHashtags.length,
      returned: limited.length,
      data: limited
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error searching hashtags',
      error: error.message
    });
  }
});

/**
 * POST /api/hashtags/generate
 * Generate hashtags from Arabic text
 * Body: { text: "arabic text here", country: "SA", category: "travel" }
 */
router.post('/generate', (req, res) => {
  try {
    const { text, country, category, limit = 20 } = req.body;
    
    if (!text) {
      return res.status(400).json({
        success: false,
        message: 'Text is required'
      });
    }
    
    // Generate basic hashtags from text
    const generatedTags = generateHashtagsFromText(text);
    
    // Get relevant hashtags based on country and category
    const suggestions = [];
    
    if (category) {
      const categories = getAllCategories();
      const matchedCategory = categories.find(
        cat => cat.data.category_info.slug === category
      );
      
      if (matchedCategory) {
        // Get universal hashtags from category
        const universalTags = matchedCategory.data.universal_hashtags || [];
        suggestions.push(...universalTags.slice(0, 10));
      }
    }
    
    if (country) {
      const countries = getAllCountries();
      const matchedCountry = countries.find(
        c => c.data.country_info.code.toLowerCase() === country.toLowerCase()
      );
      
      if (matchedCountry) {
        // Get general hashtags from country
        const generalTags = matchedCountry.data.general_hashtags || [];
        suggestions.push(...generalTags.slice(0, 10));
      }
    }
    
    // Combine generated and suggested hashtags
    const allTags = [...new Set([...generatedTags, ...suggestions])];
    const limitedTags = allTags.slice(0, parseInt(limit));
    
    res.json({
      success: true,
      text_analyzed: text.substring(0, 100) + (text.length > 100 ? '...' : ''),
      total_generated: limitedTags.length,
      data: {
        generated_from_text: generatedTags.slice(0, 5),
        suggested_hashtags: limitedTags,
        filters_applied: {
          country: country || null,
          category: category || null
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error generating hashtags',
      error: error.message
    });
  }
});

/**
 * GET /api/hashtags/popular
 * Get popular hashtags (mock for now)
 */
router.get('/popular', (req, res) => {
  try {
    const { limit = 20 } = req.query;
    
    // For now, return some popular hashtags
    // In production, this would come from analytics/tracking
    const popular = [
      { hashtag: '#السعودية', usage_count: 15420, category: 'general' },
      { hashtag: '#سفر', usage_count: 12340, category: 'travel' },
      { hashtag: '#طعام', usage_count: 10250, category: 'food' },
      { hashtag: '#رياضة', usage_count: 9830, category: 'sports' },
      { hashtag: '#موضة', usage_count: 8920, category: 'fashion' }
    ];
    
    res.json({
      success: true,
      count: popular.length,
      data: popular.slice(0, parseInt(limit))
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching popular hashtags',
      error: error.message
    });
  }
});

module.exports = router;
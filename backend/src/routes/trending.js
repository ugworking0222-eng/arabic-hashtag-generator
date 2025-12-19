const express = require('express');
const router = express.Router();

/**
 * GET /api/trending
 * Get trending hashtags (global)
 */
router.get('/', (req, res) => {
  try {
    const { limit = 20 } = req.query;
    
    // Mock trending data for now
    // In production, this would be updated from real-time sources
    const trending = [
      { 
        hashtag: '#رؤية_٢٠٣٠', 
        trend_score: 98, 
        region: 'Gulf',
        category: 'government',
        growth: '+45%'
      },
      { 
        hashtag: '#نيوم', 
        trend_score: 95, 
        region: 'Saudi Arabia',
        category: 'projects',
        growth: '+38%'
      },
      { 
        hashtag: '#سفر', 
        trend_score: 92, 
        region: 'Global',
        category: 'travel',
        growth: '+25%'
      },
      { 
        hashtag: '#الحرمين_الشريفين', 
        trend_score: 90, 
        region: 'Saudi Arabia',
        category: 'religious',
        growth: '+22%'
      },
      { 
        hashtag: '#دبي', 
        trend_score: 88, 
        region: 'UAE',
        category: 'city',
        growth: '+20%'
      },
      { 
        hashtag: '#موسم_الرياض', 
        trend_score: 85, 
        region: 'Saudi Arabia',
        category: 'events',
        growth: '+30%'
      },
      { 
        hashtag: '#كأس_العالم', 
        trend_score: 83, 
        region: 'Global',
        category: 'sports',
        growth: '+18%'
      },
      { 
        hashtag: '#رمضان', 
        trend_score: 80, 
        region: 'Global',
        category: 'religious',
        growth: '+15%'
      }
    ];
    
    res.json({
      success: true,
      updated_at: new Date().toISOString(),
      count: trending.length,
      data: trending.slice(0, parseInt(limit))
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching trending hashtags',
      error: error.message
    });
  }
});

/**
 * GET /api/trending/:country
 * Get trending hashtags for specific country
 */
router.get('/:country', (req, res) => {
  try {
    const { country } = req.params;
    const { limit = 20 } = req.query;
    
    // Mock country-specific trending
    const countryTrending = {
      'sa': [
        { hashtag: '#رؤية_٢٠٣٠', trend_score: 98 },
        { hashtag: '#نيوم', trend_score: 95 },
        { hashtag: '#موسم_الرياض', trend_score: 85 },
        { hashtag: '#محمد_بن_سلمان', trend_score: 82 },
        { hashtag: '#الحرمين_الشريفين', trend_score: 90 }
      ],
      'ae': [
        { hashtag: '#دبي', trend_score: 95 },
        { hashtag: '#إكسبو', trend_score: 88 },
        { hashtag: '#أبوظبي', trend_score: 85 },
        { hashtag: '#الإمارات', trend_score: 92 }
      ],
      'eg': [
        { hashtag: '#مصر', trend_score: 94 },
        { hashtag: '#القاهرة', trend_score: 88 },
        { hashtag: '#الأهرامات', trend_score: 85 }
      ]
    };
    
    const data = countryTrending[country.toLowerCase()] || [];
    
    res.json({
      success: true,
      country: country.toUpperCase(),
      updated_at: new Date().toISOString(),
      count: data.length,
      data: data.slice(0, parseInt(limit))
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching country trending',
      error: error.message
    });
  }
});

/**
 * GET /api/trending/category/:slug
 * Get trending hashtags for specific category
 */
router.get('/category/:slug', (req, res) => {
  try {
    const { slug } = req.params;
    const { limit = 20 } = req.query;
    
    // Mock category trending
    const categoryTrending = {
      'travel': [
        { hashtag: '#سفر', trend_score: 92 },
        { hashtag: '#سياحة', trend_score: 88 },
        { hashtag: '#مغامرة', trend_score: 85 }
      ],
      'food': [
        { hashtag: '#طعام', trend_score: 90 },
        { hashtag: '#مطاعم', trend_score: 87 },
        { hashtag: '#وصفات', trend_score: 84 }
      ],
      'sports': [
        { hashtag: '#رياضة', trend_score: 91 },
        { hashtag: '#كرة_القدم', trend_score: 89 },
        { hashtag: '#الدوري_السعودي', trend_score: 86 }
      ]
    };
    
    const data = categoryTrending[slug.toLowerCase()] || [];
    
    res.json({
      success: true,
      category: slug,
      updated_at: new Date().toISOString(),
      count: data.length,
      data: data.slice(0, parseInt(limit))
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching category trending',
      error: error.message
    });
  }
});

module.exports = router;
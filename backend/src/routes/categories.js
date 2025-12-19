const express = require('express');
const router = express.Router();
const {
  getAllCategories,
  getCategoryBySlug
} = require('../utils/dataLoader');

/**
 * GET /api/categories
 * Get all categories
 */
router.get('/', (req, res) => {
  try {
    const categories = getAllCategories();
    
    // Return simplified list
    const categoriesList = categories.map(category => ({
      id: category.data.category_info.id,
      slug: category.data.category_info.slug,
      name_en: category.data.category_info.name_en,
      name_ar: category.data.category_info.name_ar,
      icon: category.data.category_info.icon,
      color: category.data.category_info.color,
      popularity: category.data.popularity_score || 0
    }));
    
    // Sort by popularity
    categoriesList.sort((a, b) => b.popularity - a.popularity);
    
    res.json({
      success: true,
      count: categoriesList.length,
      data: categoriesList
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching categories',
      error: error.message
    });
  }
});

/**
 * GET /api/categories/:slug
 * Get specific category by slug
 */
router.get('/:slug', (req, res) => {
  try {
    const { slug } = req.params;
    const category = getCategoryBySlug(slug);
    
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }
    
    res.json({
      success: true,
      data: category
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching category',
      error: error.message
    });
  }
});

/**
 * GET /api/categories/:slug/hashtags
 * Get all hashtags for a specific category
 */
router.get('/:slug/hashtags', (req, res) => {
  try {
    const { slug } = req.params;
    const { limit } = req.query;
    const category = getCategoryBySlug(slug);
    
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }
    
    // Collect all hashtags from the category
    const allHashtags = [];
    
    // Extract hashtags from all fields except category_info
    Object.keys(category).forEach(key => {
      if (key !== 'category_info' && key !== 'popularity_score') {
        if (Array.isArray(category[key])) {
          allHashtags.push(...category[key]);
        }
      }
    });
    
    // Apply limit if provided
    const limitedHashtags = limit 
      ? allHashtags.slice(0, parseInt(limit))
      : allHashtags;
    
    res.json({
      success: true,
      category: category.category_info.name_en,
      total_hashtags: allHashtags.length,
      returned: limitedHashtags.length,
      data: limitedHashtags
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching hashtags',
      error: error.message
    });
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const {
  getAllCountries,
  getCountryByCode
} = require('../utils/dataLoader');

/**
 * GET /api/countries
 * Get all countries
 */
router.get('/', (req, res) => {
  try {
    const countries = getAllCountries();
    
    // Return simplified list
    const countriesList = countries.map(country => ({
      code: country.data.country_info.code,
      name_en: country.data.country_info.name_en,
      name_ar: country.data.country_info.name_ar,
      flag: country.data.country_info.flag,
      region: country.data.country_info.region
    }));
    
    res.json({
      success: true,
      count: countriesList.length,
      data: countriesList
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching countries',
      error: error.message
    });
  }
});

/**
 * GET /api/countries/:code
 * Get specific country by code
 */
router.get('/:code', (req, res) => {
  try {
    const { code } = req.params;
    const country = getCountryByCode(code);
    
    if (!country) {
      return res.status(404).json({
        success: false,
        message: 'Country not found'
      });
    }
    
    res.json({
      success: true,
      data: country
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching country',
      error: error.message
    });
  }
});

/**
 * GET /api/countries/:code/cities
 * Get cities of a specific country
 */
router.get('/:code/cities', (req, res) => {
  try {
    const { code } = req.params;
    const country = getCountryByCode(code);
    
    if (!country) {
      return res.status(404).json({
        success: false,
        message: 'Country not found'
      });
    }
    
    res.json({
      success: true,
      country: country.country_info.name_en,
      count: country.cities ? country.cities.length : 0,
      data: country.cities || []
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching cities',
      error: error.message
    });
  }
});

/**
 * GET /api/countries/:code/hashtags
 * Get all hashtags for a specific country
 */
router.get('/:code/hashtags', (req, res) => {
  try {
    const { code } = req.params;
    const country = getCountryByCode(code);
    
    if (!country) {
      return res.status(404).json({
        success: false,
        message: 'Country not found'
      });
    }
    
    // Collect all hashtags from the country data
    const allHashtags = {
      general: country.general_hashtags || [],
      government: country.government_leadership || [],
      vision2030: country.vision_2030 || [],
      projects: country.mega_projects || [],
      economy: country.economy_business || [],
      culture: country.culture_heritage || [],
      events: country.events_festivals || []
    };
    
    // Count total hashtags
    const totalCount = Object.values(allHashtags).reduce(
      (acc, arr) => acc + arr.length, 0
    );
    
    res.json({
      success: true,
      country: country.country_info.name_en,
      total_hashtags: totalCount,
      data: allHashtags
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
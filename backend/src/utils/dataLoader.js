const fs = require('fs');
const path = require('path');

/**
 * Load JSON file from database folder
 */
const loadJSON = (filepath) => {
  try {
    // Path from backend/src/utils/ to database/ (at root level)
    // __dirname is backend/src/utils, so go up 3 levels to root, then to filepath
    const fullPath = path.join(__dirname, '../../..', filepath);
    const data = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading JSON file: ${filepath}`, error.message);
    console.error(`Attempted full path: ${path.join(__dirname, '../../..', filepath)}`);
    return null;
  }
};

/**
 * Load all files from a directory
 */
const loadAllFromDirectory = (directory) => {
  try {
    const dirPath = path.join(__dirname, '../../..', directory);
    const files = fs.readdirSync(dirPath);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    const data = [];
    jsonFiles.forEach(file => {
      const filePath = path.join(directory, file);
      const content = loadJSON(filePath);
      if (content) {
        data.push({
          filename: file.replace('.json', ''),
          data: content
        });
      }
    });
    
    return data;
  } catch (error) {
    console.error(`Error loading directory: ${directory}`, error.message);
    console.error(`Attempted full path: ${path.join(__dirname, '../../..', directory)}`);
    return [];
  }
};

/**
 * Get all countries
 */
const getAllCountries = () => {
  return loadAllFromDirectory('database/seeds/countries');
};

/**
 * Get specific country by code
 */
const getCountryByCode = (code) => {
  // Map country codes to filenames
  const countryFileMap = {
    'sa': 'saudi-arabia',
    'ae': 'uae',
    'qa': 'qatar',
    'kw': 'kuwait',
    'bh': 'bahrain',
    'om': 'oman',
    'eg': 'egypt',
    'jo': 'jordan',
    'lb': 'lebanon',
    'iq': 'iraq',
    'sy': 'syria',
    'ps': 'palestine',
    'ye': 'yemen',
    'ma': 'morocco',
    'dz': 'algeria',
    'tn': 'tunisia',
    'ly': 'libya'
  };
  
  const filename = countryFileMap[code.toLowerCase()] || code.toLowerCase();
  const filepath = `database/seeds/countries/${filename}.json`;
  return loadJSON(filepath);
};

/**
 * Get all categories
 */
const getAllCategories = () => {
  return loadAllFromDirectory('database/seeds/categories');
};

/**
 * Get specific category by slug
 */
const getCategoryBySlug = (slug) => {
  const filepath = `database/seeds/categories/${slug.toLowerCase()}.json`;
  return loadJSON(filepath);
};

/**
 * Search hashtags across all data
 */
const searchHashtags = (query, filters = {}) => {
  const results = [];
  const searchTerm = query.toLowerCase();
  
  // Search in countries
  if (!filters.type || filters.type === 'country') {
    const countries = getAllCountries();
    countries.forEach(country => {
      const hashtags = extractAllHashtags(country.data);
      const matched = hashtags.filter(tag => 
        tag.toLowerCase().includes(searchTerm)
      );
      if (matched.length > 0) {
        results.push({
          type: 'country',
          source: country.filename,
          name: country.data.country_info.name_en,
          name_ar: country.data.country_info.name_ar,
          hashtags: matched
        });
      }
    });
  }
  
  // Search in categories
  if (!filters.type || filters.type === 'category') {
    const categories = getAllCategories();
    categories.forEach(category => {
      const hashtags = extractAllHashtags(category.data);
      const matched = hashtags.filter(tag => 
        tag.toLowerCase().includes(searchTerm)
      );
      if (matched.length > 0) {
        results.push({
          type: 'category',
          source: category.filename,
          name: category.data.category_info.name_en,
          name_ar: category.data.category_info.name_ar,
          hashtags: matched
        });
      }
    });
  }
  
  return results;
};

/**
 * Extract all hashtags from an object recursively
 */
const extractAllHashtags = (obj) => {
  let hashtags = [];
  
  const extract = (item) => {
    if (Array.isArray(item)) {
      item.forEach(i => {
        if (typeof i === 'string' && i.startsWith('#')) {
          hashtags.push(i);
        } else if (typeof i === 'object') {
          extract(i);
        }
      });
    } else if (typeof item === 'object' && item !== null) {
      Object.values(item).forEach(value => extract(value));
    }
  };
  
  extract(obj);
  return [...new Set(hashtags)]; // Remove duplicates
};

/**
 * Generate hashtags from text (basic implementation)
 */
const generateHashtagsFromText = (text) => {
  // This is a simple implementation
  // In production, you'd use NLP or AI to generate better hashtags
  const words = text.split(/\s+/);
  const hashtags = words
    .filter(word => word.length > 3)
    .map(word => `#${word.replace(/[^\u0600-\u06FFa-zA-Z0-9]/g, '')}`)
    .filter(tag => tag.length > 4);
  
  return [...new Set(hashtags)]; // Remove duplicates
};

module.exports = {
  loadJSON,
  loadAllFromDirectory,
  getAllCountries,
  getCountryByCode,
  getAllCategories,
  getCategoryBySlug,
  searchHashtags,
  extractAllHashtags,
  generateHashtagsFromText
};
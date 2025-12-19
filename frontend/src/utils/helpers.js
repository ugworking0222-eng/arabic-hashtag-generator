import toast from 'react-hot-toast';

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard! 📋');
    return true;
  } catch (error) {
    toast.error('Failed to copy');
    return false;
  }
};

/**
 * Copy multiple hashtags
 */
export const copyMultipleHashtags = async (hashtags) => {
  const text = Array.isArray(hashtags) ? hashtags.join(' ') : hashtags;
  return await copyToClipboard(text);
};

/**
 * Format number with commas
 */
export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num);
};

/**
 * Truncate text
 */
export const truncateText = (text, maxLength = 50) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Check if text is Arabic
 */
export const isArabic = (text) => {
  const arabicPattern = /[\u0600-\u06FF]/;
  return arabicPattern.test(text);
};

/**
 * Get category color
 */
export const getCategoryColor = (slug, type = 'gradient') => {
  const colors = {
    travel: { gradient: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50', text: 'text-blue-600' },
    food: { gradient: 'from-orange-500 to-red-500', bg: 'bg-orange-50', text: 'text-orange-600' },
    business: { gradient: 'from-purple-500 to-indigo-500', bg: 'bg-purple-50', text: 'text-purple-600' },
    sports: { gradient: 'from-green-500 to-emerald-500', bg: 'bg-green-50', text: 'text-green-600' },
  };
  
  const defaultColor = { gradient: 'from-gray-500 to-gray-600', bg: 'bg-gray-50', text: 'text-gray-600' };
  
  return colors[slug]?.[type] || defaultColor[type];
};

/**
 * Format date
 */
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
};

/**
 * Debounce function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Generate random gradient
 */
export const getRandomGradient = () => {
  const gradients = [
    'from-blue-500 to-purple-500',
    'from-green-500 to-teal-500',
    'from-orange-500 to-red-500',
    'from-pink-500 to-rose-500',
    'from-indigo-500 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-cyan-500 to-blue-500',
    'from-emerald-500 to-green-500',
  ];
  
  return gradients[Math.floor(Math.random() * gradients.length)];
};

/**
 * Validate hashtag format
 */
export const isValidHashtag = (text) => {
  return text.startsWith('#') && text.length > 1;
};

/**
 * Extract hashtags from text
 */
export const extractHashtags = (text) => {
  const hashtagPattern = /#[\u0600-\u06FFa-zA-Z0-9_]+/g;
  return text.match(hashtagPattern) || [];
};
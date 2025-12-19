// Category Colors - Beautiful gradients for each category
export const CATEGORY_COLORS = {
  travel: {
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-400',
    icon: '✈️'
  },
  food: {
    gradient: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    border: 'border-orange-400',
    icon: '🍽️'
  },
  business: {
    gradient: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-400',
    icon: '💼'
  },
  sports: {
    gradient: 'from-green-500 to-emerald-500',
    bg: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-400',
    icon: '⚽'
  },
  fashion: {
    gradient: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    text: 'text-pink-600',
    border: 'border-pink-400',
    icon: '👗'
  },
  technology: {
    gradient: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
    text: 'text-cyan-600',
    border: 'border-cyan-400',
    icon: '📱'
  },
  education: {
    gradient: 'from-yellow-500 to-amber-500',
    bg: 'bg-yellow-50',
    text: 'text-yellow-600',
    border: 'border-yellow-400',
    icon: '📚'
  },
  entertainment: {
    gradient: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    border: 'border-violet-400',
    icon: '🎬'
  },
  lifestyle: {
    gradient: 'from-teal-500 to-cyan-500',
    bg: 'bg-teal-50',
    text: 'text-teal-600',
    border: 'border-teal-400',
    icon: '🏠'
  },
  family: {
    gradient: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
    text: 'text-rose-600',
    border: 'border-rose-400',
    icon: '👶'
  },
  health: {
    gradient: 'from-emerald-500 to-green-500',
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-400',
    icon: '🏥'
  },
  haramain: {
    gradient: 'from-green-600 to-emerald-600',
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-500',
    icon: '🕌'
  },
  government: {
    gradient: 'from-blue-600 to-indigo-600',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-500',
    icon: '👑'
  },
  vision2030: {
    gradient: 'from-purple-600 to-pink-600',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    border: 'border-purple-500',
    icon: '🎯'
  },
  trending2026: {
    gradient: 'from-red-500 to-orange-500',
    bg: 'bg-red-50',
    text: 'text-red-600',
    border: 'border-red-400',
    icon: '🔥'
  }
};

// Country Colors
export const COUNTRY_COLORS = {
  SA: { color: 'from-green-600 to-emerald-600', flag: '🇸🇦' },
  AE: { color: 'from-red-600 to-orange-600', flag: '🇦🇪' },
  QA: { color: 'from-purple-600 to-pink-600', flag: '🇶🇦' },
  KW: { color: 'from-blue-600 to-cyan-600', flag: '🇰🇼' },
  BH: { color: 'from-red-500 to-pink-500', flag: '🇧🇭' },
  OM: { color: 'from-red-600 to-pink-600', flag: '🇴🇲' },
  EG: { color: 'from-red-600 to-yellow-600', flag: '🇪🇬' },
  JO: { color: 'from-green-600 to-red-600', flag: '🇯🇴' },
  LB: { color: 'from-red-600 to-green-600', flag: '🇱🇧' },
  IQ: { color: 'from-red-600 to-black', flag: '🇮🇶' },
  SY: { color: 'from-red-600 to-black', flag: '🇸🇾' },
  PS: { color: 'from-green-600 to-red-600', flag: '🇵🇸' },
  YE: { color: 'from-red-600 to-black', flag: '🇾🇪' },
  MA: { color: 'from-red-600 to-green-600', flag: '🇲🇦' },
  DZ: { color: 'from-green-600 to-white', flag: '🇩🇿' },
  TN: { color: 'from-red-600 to-white', flag: '🇹🇳' },
  LY: { color: 'from-green-600 to-black', flag: '🇱🇾' },
};

// API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://localhost:5000/api',
  TIMEOUT: 10000,
};

// App Configuration
export const APP_CONFIG = {
  NAME: 'Arabic Hashtag Generator',
  NAME_AR: 'مولد الهاشتاقات العربية',
  DESCRIPTION: 'Generate trending Arabic hashtags for social media',
  VERSION: '1.0.0',
};

// Default limits
export const LIMITS = {
  HASHTAGS_PER_PAGE: 50,
  TRENDING_COUNT: 20,
  SEARCH_RESULTS: 30,
};
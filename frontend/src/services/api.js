import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Countries API
export const countriesAPI = {
  getAll: () => api.get('/countries'),
  getByCode: (code) => api.get(`/countries/${code}`),
  getCities: (code) => api.get(`/countries/${code}/cities`),
  getHashtags: (code) => api.get(`/countries/${code}/hashtags`),
};

// Categories API
export const categoriesAPI = {
  getAll: () => api.get('/categories'),
  getBySlug: (slug) => api.get(`/categories/${slug}`),
  getHashtags: (slug, limit) => api.get(`/categories/${slug}/hashtags`, { params: { limit } }),
};

// Hashtags API
export const hashtagsAPI = {
  search: (query, type, limit) => api.get('/hashtags/search', { params: { q: query, type, limit } }),
  generate: (data) => api.post('/hashtags/generate', data),
  getPopular: (limit) => api.get('/hashtags/popular', { params: { limit } }),
};

// Trending API
export const trendingAPI = {
  getGlobal: (limit) => api.get('/trending', { params: { limit } }),
  getByCountry: (country, limit) => api.get(`/trending/${country}`, { params: { limit } }),
  getByCategory: (slug, limit) => api.get(`/trending/category/${slug}`, { params: { limit } }),
};

export default api;
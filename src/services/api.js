import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCourses = async (params = {}) => {
  const response = await api.get('/courses', { params });
  return response.data;
};

export const getCourseBySlug = async (slug) => {
  const response = await api.get(`/courses/${slug}`);
  return response.data;
};

export const getTopicBySlugs = async (courseSlug, moduleSlug, topicSlug) => {
  const response = await api.get(`/topics/${courseSlug}/${moduleSlug}/${topicSlug}`);
  return response.data;
};

export const submitEnquiry = async (enquiryData) => {
  const response = await api.post('/enquiries', enquiryData);
  return response.data;
};

export const getSettings = async () => {
  const response = await api.get('/settings');
  return response.data;
};

export default api;

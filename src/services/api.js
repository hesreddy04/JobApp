import axios from 'axios';

const BASE_URL = 'https://testapi.getlokalapp.com/common/jobs';

export const fetchJobs = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}?page=${page}`);
    return response.data.results || [];
  } catch (error) {
    throw new Error('Failed to fetch jobs. Please try again.');
  }
};
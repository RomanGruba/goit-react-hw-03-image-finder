import axios from 'axios';

const baseURL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
const key = '13247871-683997deec1332bee3feb82ad';

export const fetchImages = (query: 'spring') =>
  axios.get(`${baseURL}${query}&page=1&per_page=12&key=${key}`);

export const dummy = () => null;

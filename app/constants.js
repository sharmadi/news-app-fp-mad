export const NAME = 'news';
export const PAGESIZE = 20;
export const HEADLINES_AVAILABLE = `${NAME}/HEADLINES_AVAILABLE`;
export const API_URL = 'https://newsapi.org/v2';
export const API_KEY = '?apiKey=';
export const API_PARAMS = `&pageSize=${PAGESIZE}`;
export const HEADLINES = `${API_URL}/top-headlines${API_KEY}${API_PARAMS}`;
export const CATEGORIES = ["General", "Entertainment", "Business", "Health", "Science", "Sports", "Technology"];
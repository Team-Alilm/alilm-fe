const API_URL = process.env.ALILM_SERVER_API_BASE_URL;

const OAUTH_ROOT = `${API_URL}/oauth2`;

export const API_LIST = {
  KAKAO_AUTH: `${OAUTH_ROOT}/authorization/kakao`,
  HEALTH_CHECK: `${API_URL}/health-check`,
  PRODUCT_SCRAPING: `${API_URL}/api/v1/products/scraping`,
  PRODUCT_LIST: `${API_URL}/api/v1/products`,
  MY_PRODUCT_LIST: `${API_URL}/api/v1/baskets/my`,
  PRODUCT_REGISTER: `${API_URL}/api/v1/alilms`,
};

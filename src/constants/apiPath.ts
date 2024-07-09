const API_URL = process.env.ALILM_SERVER_API_BASE_URL;

const OAUTH_ROOT = `${API_URL}/oauth2`;

// login api
export const KAKAO_AUTH_URL_GET = `${OAUTH_ROOT}/authorization/kakao`;

// 서버 상태 체크 api
export const HEALTH_CHECK_URL_GET = `${API_URL}/health-check`;

// 상품 스크래핑 api
export const PRODUCT_SCRAPING_URL_GET = `${API_URL}/api/v1/products/scraping`;

// 상품 리스트 API
export const PRODUCT_LIST_URL_GET = `${API_URL}/api/v1/products`;

// 나의 상품 리스트 API
export const MY_PRODUCT_LIST_URL_GET = `${API_URL}/api/v1/baskets/my`;

// 상품 등록 API
export const PRODUCT_REGISTER_URL_POST = `${API_URL}/api/v1/alilms`;
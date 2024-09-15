import { style } from '@vanilla-extract/css';

export const onboardingPage = style({
  width: '100%',
  height: '100vh', // 화면 전체 높이로 설정
  padding: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f9f9f9', // 배경색 추가
});

export const slide = style({
  width: '100%',
  maxWidth: '500px', // 최대 너비 설정으로 레이아웃 제한
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff', // 흰색 배경
  padding: '30px',
  borderRadius: '10px', // 모서리를 둥글게
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // 부드러운 그림자 효과
});

export const imageContainer = style({
  height: '100px',
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const nextButton = style({
  padding: '12px 24px', // 더 넉넉한 여백
  backgroundColor: '#ff6a00',
  color: '#fff',
  border: 'none',
  borderRadius: '8px', // 더 둥근 모서리
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '600', // 굵은 글씨로 강조
  transition: 'background-color 0.3s ease',

  ':hover': {
    backgroundColor: '#ff7f33', // 좀 더 자연스러운 호버 색상
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'auto',
  marginBottom: '30px',
  textAlign: 'center', // 텍스트 가운데 정렬
});

export const infoText = style({
  marginTop: '20px',
  padding: '10px 20px',
  textAlign: 'center',
  fontSize: '15px',
  fontWeight: '500', // 좀 더 부드러운 굵기
  lineHeight: '1.5',
  color: '#333', // 더 선명한 텍스트 색상
  backgroundColor: '#f0f0f0', // 부드러운 배경색 추가
  borderRadius: '8px',
});

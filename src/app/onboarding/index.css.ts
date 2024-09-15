import { style } from '@vanilla-extract/css';

export const onboardingPage = style({
  width: '100%',
  height: '100%',
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const slide = style({
  width: '500px',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const imageContainer = style({
  height: '100px',
  backgroundColor: '#f9f9f9',
  marginBottom: '20px',
});

// nextButton 스타일 추가
export const nextButton = style({
  padding: '10px 20px', // 버튼 내부 여백
  backgroundColor: '#007bff', // 버튼 배경색 (파란색)
  color: '#fff', // 버튼 텍스트 색상 (흰색)
  border: 'none', // 버튼 테두리 제거
  borderRadius: '5px', // 모서리를 둥글게
  cursor: 'pointer', // 마우스 커서 변경
  fontSize: '16px', // 텍스트 크기
  transition: 'background-color 0.3s ease', // 배경색 전환 효과 추가

  // Hover 상태에서 배경색 변경
  ':hover': {
    backgroundColor: '#0056b3', // 호버 시 어두운 파란색으로 변경
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '300px',
  marginBottom: '20px',
});

export const infoText = style({
  marginTop: '20px', // 상단 여백 추가
  padding: '10px',
  textAlign: 'center',
  fontSize: '15px',
  fontWeight: 'bold',

  color: 'rgba(51,51,51,0.7)', // 텍스트 색상
  borderRadius: '5px',
});

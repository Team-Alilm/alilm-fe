import { style } from '@vanilla-extract/css';

export const onboardingPage = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '32px',
});

export const swiperContainer = style({
  width: '100%',
  height: '100%',
});

export const slideContent = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

// nextButton 스타일 추가
export const nextButton = style({
  marginTop: '20px', // 버튼 위쪽에 간격 추가
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

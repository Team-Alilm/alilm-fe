import Menu from '@/components/design-system/menu';
import { AtSign, Bell } from 'lucide-react';

const MypageMenu = () => {
  return (
    <>
      <p style={{ fontSize: '1.4rem', color: '#818181' }}>메뉴</p>
      <Menu
        text="알림 받아볼 이메일 변경"
        icon={<AtSign width={'1.6rem'} />}
        path="/mypage/edit-email"
      />
      <Menu text="나의 알림" icon={<Bell width={'1.6rem'} />} path="/mypage/my-alilm" />
    </>
  );
};

export default MypageMenu;

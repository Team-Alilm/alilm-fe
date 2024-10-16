'use client';

import { useEffect } from 'react';
import Divider from '@/components/design-system/divider';
import MyAlilm from '@/components/mypage/my-alilm';
import MypageMenu from '@/components/mypage/mypage-menu';
import Profile from '@/components/mypage/profile';
import { useGetMyAlilmCounts } from '@/hooks/quries/use-get-alilm-count';
import useGetMyInfo from '@/hooks/quries/use-get-my-info';
import { useUserStore } from '@/store/use-user-store';

import { mypage } from './index.css';

const Mypage = () => {
  const { data: myInfo } = useGetMyInfo();
  const { data: myAlilmCounts } = useGetMyAlilmCounts();
  const setUserInfo = useUserStore(state => state.setUserInfo);

  useEffect(() => {
    if (myInfo) {
      setUserInfo(myInfo);
    }
  }, []);

  return (
    <div className={mypage}>
      <Profile userName={myInfo?.nickname} email={myInfo?.email} />
      <MyAlilm count={myAlilmCounts.count} />
      <Divider marginX="2.4" />
      <MypageMenu />
    </div>
  );
};

export default Mypage;

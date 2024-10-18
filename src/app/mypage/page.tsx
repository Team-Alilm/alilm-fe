'use client';

import { useEffect } from 'react';
import Divider from '@/components/design-system/divider';
import MyAlilm from '@/components/mypage/my-alilm';
import MypageMenu from '@/components/mypage/mypage-menu';
import Profile from '@/components/mypage/profile';
import { useGetMyAlilmCounts } from '@/hooks/queries/use-get-alilm-count';
import { useGetMyBaskets } from '@/hooks/queries/use-get-my-baskets';
import useGetMyInfo from '@/hooks/queries/use-get-my-info';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useUserStore } from '@/store/use-user-store';

import { mypage } from './index.css';

const Mypage = () => {
  const { data: myInfo } = useGetMyInfo();
  const { data: myAlilmCounts } = useGetMyAlilmCounts();
  const { data: myBaskets } = useGetMyBaskets();

  const setUserInfo = useUserStore(state => state.setUserInfo);

  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);

  useEffect(() => {
    if (accessToken && myInfo) {
      setUserInfo(myInfo);
    }
  }, [myInfo]);

  return (
    <div className={mypage}>
      <Profile userName={myInfo?.nickname} email={myInfo?.email} />
      <MyAlilm alilmCount={myAlilmCounts?.count} basketCount={myBaskets?.length} />
      <Divider marginX="2.4" />
      <MypageMenu />
    </div>
  );
};

export default Mypage;

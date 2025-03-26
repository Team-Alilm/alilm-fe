/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePatchAlilmRead } from '@/hooks/mutations/use-patch-alilm-read';
import { usePatchAlilmReadAll } from '@/hooks/mutations/use-patch-alilm-read-all';
import { type AlimHistoryItem, useGetNotifications } from '@/hooks/queries/use-get-notifications';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { BellRing } from 'lucide-react';

import {
  brandName,
  info,
  infoBoxInner,
  infoWrapper,
  notification,
  notificationContent,
  notificationImage,
  notificationOptions,
  notificationProduct,
  notificationTextWrapper,
  notificationType,
  readAllBtn,
  readNotification,
} from './index.css';

const NotificationHistoryList = () => {
  const { data: notifications } = useGetNotifications();
  const { mutate: patchAlilmRead } = usePatchAlilmRead();
  const { mutate: readAllMutate } = usePatchAlilmReadAll();

  const router = useRouter();

  if (!notifications) return;

  const handleNotificationClick = (alilmId: number, productId: number) => {
    patchAlilmRead([alilmId]);

    router.push(`/product/${productId}`);
  };

  dayjs.extend(utc);
  dayjs.extend(timezone);

  const formattedKST = (item: AlimHistoryItem) => {
    const createdTime = dayjs.utc(item.createdDate).tz('Asia/Seoul');
    const now = dayjs().tz('Asia/Seoul');
    const diffMinutes = now.diff(createdTime, 'minute');
    const diffHours = now.diff(createdTime, 'hour');
    const diffDays = now.diff(createdTime, 'day');

    if (diffMinutes < 60) {
      return '방금 전';
    } else if (diffHours < 24) {
      return `${diffHours}시간 전`;
    } else if (diffDays === 1) {
      return `어제 ${createdTime.format('HH:mm')}`;
    } else {
      return createdTime.format('YYYY. MM. DD HH:mm');
    }
  };

  return (
    <div>
      <div className={infoWrapper}>
        <div className={info}>
          <BellRing stroke={'#707070'} width={13} />
          <div className={infoBoxInner}>
            <p>30일이 지난 알림은 사라져요.</p>
            <button onClick={() => readAllMutate()} className={readAllBtn}>
              모두 읽음 처리
            </button>
          </div>
        </div>
      </div>
      {notifications.alimHistoryList.map(item => (
        <div
          key={item.alilmId}
          className={`${notification} ${item.readYn ? readNotification : ''}`}
        >
          <div
            className={notificationContent}
            onClick={() => handleNotificationClick(item.alilmId, item.productId)}
          >
            <div className={notificationTextWrapper}>
              <div className={notificationType}>재입고 알림</div>
              <div className={brandName}>{item.brand}</div>
              <div className={notificationProduct}>{item.name}</div>
              {(item.firstOption || item.secondOption || item.thirdOption) && (
                <div className={notificationOptions}>
                  {item.firstOption && <span>{item.firstOption}</span>}
                  {item.secondOption && <span> | {item.secondOption}</span>}
                  {item.thirdOption && <span> | {item.thirdOption}</span>}
                  <span> | {formattedKST(item)}</span> 
                </div>
              )}
            </div>
            <Image
              src={item.imageUrl}
              alt="Notification Image"
              width={50}
              height={50}
              className={notificationImage}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationHistoryList;

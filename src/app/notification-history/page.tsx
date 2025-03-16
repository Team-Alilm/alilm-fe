/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePatchAlilmRead } from '@/hooks/mutations/use-patch-alilm-read';
import { useGetNotifications } from '@/hooks/queries/use-get-notifications';
import { BellRing } from 'lucide-react';

import {
  brandName,
  info,
  infoWrapper,
  notification,
  notificationContent,
  notificationImage,
  notificationOptions,
  notificationProduct,
  notificationTextWrapper,
  notificationType,
  readNotification,
} from './index.css';

const NotificationHistoryList = () => {
  const { data: notifications } = useGetNotifications();
  const { mutate: patchAlilmRead } = usePatchAlilmRead();

  const router = useRouter();

  if (!notifications) return;

  const handleNotificationClick = (alilmId: number, productId: number) => {
    patchAlilmRead([alilmId]);

    router.push(`/product/${productId}`);
  };

  return (
    <div>
      <div className={infoWrapper}>
        <div className={info}>
          <BellRing stroke={'#707070'} width={13} />
          30일이 지난 알림은 사라져요.
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

'use client';

import { type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

import Flex from '../flex';
import { menu, menuText } from './index.css';

interface MenuProps {
  text: string;
  icon?: ReactNode;
  path: string;
}

const Menu = ({ text, icon, path }: MenuProps) => {
  const router = useRouter();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={menu} onClick={() => router.push(path)}>
      <Flex align="center">
        <Flex gap="0.8rem" align="center">
          {icon}
          <div className={menuText}>{text}</div>
        </Flex>
        <ChevronRight color="#C4C4C4" />
      </Flex>
    </div>
  );
};

export default Menu;

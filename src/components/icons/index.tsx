import React, { type CSSProperties } from 'react';

import * as styles from './icon.css';
import * as icons from './icon-svg';

type IconName = keyof typeof icons;

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'cursor'> {
  icon: IconName;
  width?: number;
  height?: number;
  rotate?: number;
  cursor?: CSSProperties['cursor'];
}

export default function Icon({
  icon,
  cursor = 'initial',
  width = 24,
  height = 24,
  rotate = 0,
  ...props
}: IconProps) {
  const IconComponent = icons[icon];

  return (
    <div
      style={{
        width: `${width * 0.1}rem`,
        height: `${height * 0.1}rem`,
        transform: `rotate(${rotate}deg)`,
        transition: 'all 0.3s',
        cursor,
      }}
      className={styles.iconContainer}
    >
      <IconComponent {...props} width={`${width * 0.1}rem`} height={`${height * 0.1}rem`} />
    </div>
  );
}

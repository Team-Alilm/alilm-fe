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
  width = 24,
  height = 24,
  rotate = 0,
  cursor = 'initial',
  stroke = 'currentColor',
  ...props
}: IconProps) {
  const IconComponent = icons[icon];

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      style={{
        width: `${width * 0.1}rem`,
        height: `${height * 0.1}rem`,
        transform: `rotate(${rotate}deg)`,
        transition: 'all 0.3s',
        cursor,
      }}
      className={styles.iconContainer}
      onClick={props.onClick as unknown as React.MouseEventHandler<HTMLDivElement>}
    >
      <IconComponent
        {...props}
        width={`${width * 0.1}rem`}
        height={`${height * 0.1}rem`}
        fill={props.fill}
        stroke={stroke}
      />
    </div>
  );
}

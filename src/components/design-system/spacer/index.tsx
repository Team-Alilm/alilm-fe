import type { HTMLAttributes } from 'react';

interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
}

const Spacer = ({ width, height, ...props }: SpacerProps) => {
  return (
    <div
      style={{
        width: isNumber(width) ? `${width}px` : '100%',
        height: isNumber(height) ? `${height}px` : '100%',
      }}
      {...props}
    />
  );
};

export default Spacer;

function isNumber(number?: number) {
  return typeof number === 'number';
}

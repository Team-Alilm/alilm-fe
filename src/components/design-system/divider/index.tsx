import { type CSSProperties } from 'react';

interface DividerProps {
  marginX?: CSSProperties['margin'];
  thickness: 'thin' | 'regular' | 'thick';
}

const Divider = ({ marginX, thickness }: DividerProps) => {
  return (
    <div
      style={{
        width: '100%',
        height: thickness === 'thin' ? '0.2rem' : thickness === 'regular' ? '0.6rem' : '1rem',
        backgroundColor: '#F4F4F4',
        margin: `${marginX}rem 0`,
      }}
    ></div>
  );
};

export default Divider;

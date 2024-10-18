import { type CSSProperties } from 'react';

interface DividerProps {
  marginX?: CSSProperties['margin'];
}

const Divider = ({ marginX }: DividerProps) => {
  return (
    <div
      style={{
        width: '100%',
        height: '0.1rem',
        backgroundColor: '#F4F4F4',
        margin: `${marginX}rem 0`,
      }}
    ></div>
  );
};

export default Divider;

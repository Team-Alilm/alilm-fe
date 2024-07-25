import { type CSSProperties, type HTMLAttributes } from 'react';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  basis?: CSSProperties['flexBasis'];
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
  gap?: CSSProperties['gap'];
}

const Flex = ({
  children,
  direction,
  align,
  justify,
  wrap,
  basis,
  grow,
  shrink,
  gap,
  ...props
}: FlexProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        gap,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;

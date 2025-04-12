import { FC, ReactNode, ComponentPropsWithoutRef } from 'react';

type GradientTextProps = ComponentPropsWithoutRef<'span'> & {
  children: ReactNode;
};

const GradientText: FC<GradientTextProps> = ({ children, ...props }) => {
  return (
    <span
      {...props}
      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-primary"
    >
      {children}
    </span>
  );
};

export default GradientText;

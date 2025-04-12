import { FC, ReactNode, ComponentPropsWithoutRef } from 'react';

type ContainerProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div {...props} className="container mx-auto px-8">
      {children}
    </div>
  );
};

export default Container;

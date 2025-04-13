import { FC, ReactNode, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/cn';

type TitleProps = ComponentPropsWithoutRef<
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
> & {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const DefaultComp = 'h1';

const Title: FC<TitleProps> = ({
  children,
  as: Comp = DefaultComp,
  className,
  ...props
}) => {
  return (
    <Comp
      {...props}
      className={cn(
        'text-3xl/tight md:text-5xl/tight lg:text-6xl/tight font-medium',
        className
      )}
    >
      {children}
    </Comp>
  );
};

export default Title;

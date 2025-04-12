import { FC, ReactNode, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/cn';

type SubtitleProps = ComponentPropsWithoutRef<
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
> & {
  children: ReactNode;
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const DefaultComp = 'div';

const Subtitle: FC<SubtitleProps> = ({
  children,
  as: Comp = DefaultComp,
  className,
  ...props
}) => {
  return (
    <Comp
      {...props}
      className={cn('md:text-xl/[100%] font-medium text-primary', className)}
    >
      {children}
    </Comp>
  );
};

export default Subtitle;

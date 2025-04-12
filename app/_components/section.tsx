import { FC, ReactNode, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/cn';

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  children: ReactNode;
};

const Section: FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <section
      {...props}
      className={cn('my-16 md:my-64 space-y-14 lg:space-y-28', className)}
    >
      {children}
    </section>
  );
};

export default Section;

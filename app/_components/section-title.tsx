import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import Subtitle from './subtitle';
import Title from './title';

type SectionTitleProps = {
  children: ReactNode;
  classNames?: {
    wrapper?: string;
    title?: string;
    subtitle?: string;
  };
  subtitle?: string;
  as?: ComponentPropsWithoutRef<typeof Title>['as'];
};

const defaultAs = 'h2';

const SectionTitle: FC<SectionTitleProps> = ({
  children,
  classNames,
  subtitle,
  as = defaultAs,
}) => {
  return (
    <div className={cn('space-y-4', classNames?.wrapper)}>
      {subtitle && (
        <Subtitle className={cn(classNames?.subtitle)}>{subtitle}</Subtitle>
      )}
      <Title as={as} className={cn(classNames?.title)}>
        {children}
      </Title>
    </div>
  );
};

export default SectionTitle;

import { cn } from '@/utils/cn';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface BenefitCardProps {
  icon: StaticImageData;
  altIcon: string;
  title: string;
  description: string;
  grow?: boolean;
}

const BenefitCard: FC<BenefitCardProps> = ({
  icon,
  altIcon,
  title,
  description,
  grow,
}) => {
  return (
    <div
      className={cn(
        'bg-dark space-y-8 rounded-xl p-6 flex flex-col justify-between',
        grow && 'grow sm:row-span-2'
      )}
    >
      <Image src={icon} alt={altIcon} className="max-w-8" />
      <div className="space-y-6">
        <h3 className="font-medium text-2xl md:text-3xl">{title}</h3>
        <p className="font-light md:text-lg text-secondary-text">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;

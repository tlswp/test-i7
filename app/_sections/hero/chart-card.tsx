import { cn } from '@/utils/cn';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface ChartCardProps {
  image: StaticImageData;
  altImage: string;
  className?: string;
}

const ChartCard: FC<ChartCardProps> = ({ image, altImage, className }) => {
  return (
    <div
      className={cn(
        'p-2 sm:p-4 2xl:p-8 flex items-center bg-secondary-bg rounded-xl grow',
        className
      )}
    >
      <Image src={image} alt={altImage} />
    </div>
  );
};

export default ChartCard;

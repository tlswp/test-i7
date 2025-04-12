import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface CardProps {
  icon: StaticImageData;
  altIcon: string;
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ icon, altIcon, title, description }) => {
  return (
    <div className="space-y-10 sm:space-y-6 flex flex-col justify-start">
      <Image src={icon} alt={altIcon} className="max-w-6" />
      <div className="space-y-10 sm:space-y-2">
        <h3 className="font-medium text-xl md:text-base lg:text-2xl">
          {title}
        </h3>
        <p className="font-light md:text-lg text-secondary-text">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;

'use client';
import { FC, useState } from 'react';

interface BurgerButtonProps {
  onClick?: (isOpen: boolean) => void;
}

const BurgerButton: FC<BurgerButtonProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick(!isOpen);
  };

  return (
    <button
      onClick={toggleMenu}
      className="flex flex-col justify-between w-8 h-5 focus:outline-none"
      aria-label="Toggle menu"
    >
      <span
        className={`block h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out transform ${
          isOpen ? 'rotate-45 translate-y-[9px]' : ''
        }`}
      />
      <span
        className={`block h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out transform ${
          isOpen ? '-rotate-45 -translate-y-[9px]' : ''
        }`}
      />
    </button>
  );
};

export default BurgerButton;

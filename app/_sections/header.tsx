import Image from 'next/image';
import Button from '@/components/button';

import logo from '@/assets/logos/main.png';
import Link from 'next/link';
import BurgerButton from '../_components/burger-button';

const Header = () => {
  return (
    <div className="flex h-18 gap-15 items-center">
      <Image src={logo} className="w-25" alt="Torch Logo" />
      <div className="hidden lg:block space-x-8 *:font-medium">
        <Link href="#">Features</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
      <div className="ml-auto flex space-x-6 items-center">
        <div className="hidden sm:block space-x-4">
          <Button size="small" variant="secondary">
            Sign in
          </Button>
          <Button size="small">Get started</Button>
        </div>
        <div className="block md:hidden">
          <BurgerButton />
        </div>
      </div>
    </div>
  );
};

export default Header;

// src/app/_layout/Header.tsx
import { IconBrandTwitter, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';


import logo from '../_assets/images/logo.png';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 md:p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <Link href="#" aria-label="Twitter">
            <IconBrandTwitter className="w-5 h-5 text-white" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <IconBrandFacebook className="w-5 h-5 text-white" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <IconBrandInstagram className="w-5 h-5 text-white" />
          </Link>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
        
          <Image src={logo} alt="Mani Logo" width={100} height={50} placeholder="blur" />
        </div>

        {/* Menu */}
        <button className="flex items-center space-x-2 text-white">
          <span className="text-lg">Menu</span>
          <div className="flex flex-col space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
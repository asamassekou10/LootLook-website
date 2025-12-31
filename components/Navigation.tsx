'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="relative w-10 h-10 transform group-hover:scale-110 transition-transform duration-300">
              <Image 
                src="/icon.png" 
                alt="LootLook Logo" 
                width={40} 
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white relative">
              LootLook
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}


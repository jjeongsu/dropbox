'use client';
import Image from 'next/image';
import logo from '/public/drop-box-logo.png';

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image src={logo} alt="Mini Dropbox Logo" className="!w-8 !h-auto" />
      <span className="text-xl font-bold"> Mini box </span>
    </div>
  );
}

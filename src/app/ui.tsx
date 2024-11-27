'use client';

import FileDragDrop from '@/components/file-dragdrop';
import ImageList from '@/components/image-list';
import Logo from '@/components/logo';
import Search from '@/components/search';
import { useState } from 'react';

export default function UI() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <main className="w-full p-4 flex flex-col gap-4 justify-center">
      <Logo />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <FileDragDrop />
      <ImageList searchInput={searchInput} />
    </main>
  );
}

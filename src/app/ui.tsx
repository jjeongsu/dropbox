'use client';

import FileDragDrop from '@/components/file-dragdrop';
import ImageList from '@/components/image-list';
import Logo from '@/components/logo';
import Search from '@/components/search';

export default function UI() {
  return (
    <main className="w-full p-4 flex flex-col gap-4 justify-center">
      <Logo />
      <Search />
      {/* file Drag and Drop */}
      <FileDragDrop />
      {/* DropboxImage */}
      <ImageList />
    </main>
  );
}

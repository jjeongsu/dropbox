'use client';

import DropBoxImage from './drop-box-image';

export default function ImageList() {
  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-3">
      <DropBoxImage />
      <DropBoxImage />
      <DropBoxImage />
      <DropBoxImage />
    </section>
  );
}

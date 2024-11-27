'use client';

import { useQuery } from '@tanstack/react-query';
import DropBoxImage from './drop-box-image';
import { searchFiles } from '@/actions/storageActions';
import { Spinner } from '@material-tailwind/react';

export default function ImageList({ searchInput }) {
  const searchImageQuery = useQuery({
    queryKey: ['images', searchInput],
    queryFn: () => searchFiles(searchInput),
  });

  // 가지고온 data의 name 프로퍼티에 이미지 Path정보가 있음

  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-3">
      {searchImageQuery.isLoading && <Spinner />}
      {searchImageQuery.data &&
        searchImageQuery.data.map((image) => (
          <DropBoxImage key={image.id} image={image} />
        ))}
    </section>
  );
}

'use client';

import { deleteFile } from '@/actions/storageActions';
import { queryClient } from '@/config/ReactQueryClientProvider';
import { getImageUrl } from '@/utils/supabase/storage';
import { IconButton, Spinner } from '@material-tailwind/react';
import { useMutation } from '@tanstack/react-query';

export default function DropBoxImage({ image }) {
  const deleteFileMutation = useMutation({
    mutationFn: deleteFile, // fileName을 전달한다.
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['images'],
      }),
  });

  return (
    <div className="w-full flex flex-col border border-gray-100 rounded-2xl shadow-md p-3 relative">
      <div>
        {/* aspect-square을 주면 1:1 */}
        <img src={getImageUrl(image.name)} className="w-full aspect-square" />
      </div>

      {/* filename */}
      <div>{image.name}</div>

      <div className="absolute t-2 right-2">
        <IconButton
          onClick={() => {
            deleteFileMutation.mutate(image.name);
          }}
          color="red"
        >
          {deleteFileMutation.isPending ? (
            <Spinner />
          ) : (
            <i className="fas fa-trash" />
          )}
        </IconButton>
      </div>
    </div>
  );
}

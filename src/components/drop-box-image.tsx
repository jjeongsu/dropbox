'use client';

import { getImageUrl } from '@/utils/supabase/storage';
import { IconButton } from '@material-tailwind/react';

export default function DropBoxImage({ image }) {
  return (
    <div className="w-full flex flex-col border border-gray-100 rounded-2xl shadow-md p-3 relative">
      <div>
        {/* aspect-square을 주면 1:1 */}
        <img src={getImageUrl(image.name)} className="w-full aspect-square" />
      </div>

      {/* filename */}
      <div>{image.name}</div>

      <div className="absolute t-2 right-2">
        <IconButton onClick={() => {}} color="red">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}

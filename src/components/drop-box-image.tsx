'use client';

import { IconButton } from '@material-tailwind/react';

export default function DropBoxImage() {
  return (
    <div className="w-full flex flex-col border border-gray-100 rounded-2xl shadow-md p-3 relative">
      <div>
        {/* aspect-square을 주면 1:1 */}
        <img src="/drop-box-logo.png" className="w-full aspect-square" />
      </div>

      {/* filename */}
      <div>cutecat.jpg</div>

      <div className="absolute t-2 right-2">
        <IconButton onClick={() => {}} color="red">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}

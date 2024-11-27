'use client';

import { uploadFile } from '@/actions/storageActions';
import { queryClient } from '@/config/ReactQueryClientProvider';
import { Button } from '@material-tailwind/react';
import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';

export default function FileDragDrop() {
  const fileRef = useRef(null);

  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['images'],
      });
    },
  });

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const file = fileRef?.current.files?.[0];
        if (file) {
          // 정상적으로 파일이 올라왔다면
          const formData = new FormData();
          formData.append('file', file);
          const result = await uploadImageMutation.mutate(formData);
          console.log(result);
        }
      }}
      className="w-full border-2 border-dotted padding-5 border-indigo-600 flex justify-center items-center flex-col  py-20"
    >
      <input type="file" ref={fileRef} />
      <p> 파일을 끌어다 높거나 클릭해서 파일을 업로드 하세요</p>
      <Button type="submit" loading={uploadImageMutation.isPending}>
        파일업로드
      </Button>
    </form>
  );
}

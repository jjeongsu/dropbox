'use client';

import { uploadFile } from '@/actions/storageActions';
import { queryClient } from '@/config/ReactQueryClientProvider';
import { Spinner } from '@material-tailwind/react';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileDragDrop() {
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['images'],
      });
    },
  });

  // note : react-dragzone 관련 설정
  const onDrop = useCallback(async (acceptedFiles) => {
    const formData = new FormData();
    if (acceptedFiles.length > 0) {
      acceptedFiles.forEach((file) => {
        formData.append(file.name, file);
      });

      await uploadImageMutation.mutate(formData);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="w-full border-2 border-dotted padding-5 border-indigo-600 flex justify-center items-center flex-col  py-20 cursor-pointer"
    >
      <input {...getInputProps()} />
      {uploadImageMutation.isPending ? (
        <Spinner />
      ) : isDragActive ? (
        <p> 👋🏼 파일을 놓아주세요 </p>
      ) : (
        <p> 📂 파일을 끌어다 놓거나 클릭해서 파일을 업로드 하세요</p>
      )}
    </div>
  );
}

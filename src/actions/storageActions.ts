'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';

function handleError(error) {
  if (error) {
    console.error(error);
    throw error;
  }
}

export async function uploadFile(formData: FormData) {
  const files = Array.from(formData.entries()).map(([_, file]) => file as File);
  const supabase = await createServerSupabaseClient();

  const result = await Promise.all(
    files.map((file) => {
      supabase.storage
        .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
        .upload(file.name, file, { upsert: true });
    }),
  );
  return result;
}

export async function searchFiles(search: string = '') {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
    .list(null, { search }); // path, options, parameter

  handleError(error);

  return data;
}

export async function deleteFile(fileName: string) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
    .remove([fileName]); // path의 list를 받는다.

  handleError(error);
  return data;
}

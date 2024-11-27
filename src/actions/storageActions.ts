'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';

function handleError(error) {
  if (error) {
    console.error(error);
    throw error;
  }
}

export async function uploadFile(formData: FormData) {
  const file = formData.get('file') as File;
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
    .upload(file.name, file, { upsert: true }); // path, fileBody, fileOptions. * upsert : filename으로 파일이 있으면 업데이트, 없으면 insert

  handleError(error);

  return data;
}

export async function searchFiles(search: string = '') {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PCLIG_STORAGE_BUCKET)
    .list(null, { search }); // path, options, parameter

  handleError(error);

  return data;
}

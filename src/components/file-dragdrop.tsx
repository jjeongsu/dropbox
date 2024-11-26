'use client';

export default function FileDragDrop() {
  return (
    <section className="w-full border-2 border-dotted padding-5 border-indigo-600 flex justify-center items-center flex-col  py-20">
      <input type="file" />
      <p> 파일을 끌어다 높거나 클릭해서 파일을 업로드 하세요</p>
    </section>
  );
}

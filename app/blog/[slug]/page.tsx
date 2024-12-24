'use client'
import { useParams } from "next/navigation";
export default function Page() {
  const params = useParams(); // Pega os parâmetros da URL
  const slug = params.slug; // Acessa o parâmetro "slug"

  return (
    <>
      <h1>Blog Post</h1>
      <p>Slug: {slug}</p>
    </>
  );
}

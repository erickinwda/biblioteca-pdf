import { useRouter } from "next/router";

export default function Viewer() {
  const router = useRouter();
  const { file } = router.query;

  if (!file) return <p>Carregando...</p>;

  return (
    <iframe
      src={`/pdfs/${file}`}
      width="100%"
      height="100%"
      style={{ height: "100vh", border: "none" }}
    />
  );
}

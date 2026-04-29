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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        border: "none"
      }}
    />
  );
}
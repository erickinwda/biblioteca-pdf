const books = [
  { title: "Quem Pensa Enriquece", file: "quem-pensa-enriquece.pdf" },
  { title: "Gatilhos Mentais", file: "gatilhos-mentais.pdf" },
  { title: "As Armas da Persuasão", file: "as-armas-da-persuasao.pdf" },
  { title: "48 Leis do Poder", file: "48-leis-do-poder.pdf" },
];

export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>📚 Biblioteca Premium</h1>
      <p>Escolha seu livro e leia direto:</p>

      {books.map((book, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <a
            href={`/viewer?file=${book.file}`}
            style={{
              fontSize: "20px",
              color: "#0070f3",
              textDecoration: "none"
            }}
          >
            {book.title}
          </a>
        </div>
      ))}
    </div>
  );
}
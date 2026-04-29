const books = [
  { title: "Quem Pensa Enriquece", file: "quem-pensa-enriquece.pdf" },
  { title: "Gatilhos Mentais", file: "gatilhos-mentais.pdf" }
];

export default function Home() {
  return (
    <div>
      <h1>Biblioteca Premium</h1>
      {books.map((book, index) => (
        <div key={index}>
          <a href={`/viewer?file=${book.file}`}>{book.title}</a>
        </div>
      ))}
    </div>
  );
}

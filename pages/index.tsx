import { useEffect, useState } from "react";

type Word = {
  toki_pona: string;
  english: string;
};

export default function Home() {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    fetch("/api/words")
      .then((res) => res.json())
      .then((data) => setWords(data))
      .catch((err) => console.error("Error fetching words:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold my-6">📖 Toki Pona Dictionary</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {words.map((word, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-yellow-300">
              {word.toki_pona}
            </h2>
            <p className="text-gray-300">{word.english}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

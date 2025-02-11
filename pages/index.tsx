import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type Word = {
  toki_pona: string;
  english: string;
};

export default function HomePage() {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    fetch("/api/words")
      .then((res) => res.json())
      .then((data) => setWords(data))
      .catch((err) => console.error("Error fetching words:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Hero Section */}
      <section className="text-center max-w-2xl mt-16">
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Learn Toki Pona the Fun Way!
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600">
          Master Toki Pona with interactive lessons, quizzes, and progress tracking.
        </p>
        <Button className="mt-6 px-6 py-3 text-lg">Start Learning</Button>
      </section>
      
      {/* Features Section */}
      <section className="mt-16 grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        {[
          { title: "Flashcards", desc: "Learn words quickly with our visual flashcards." },
          { title: "Quizzes", desc: "Test your knowledge with interactive quizzes." },
          { title: "Progress Tracking", desc: "See your improvement over time." },
        ].map((feature, index) => (
          <Card key={index} className="p-4 text-center">
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      
      {/* Dictionary Section */}
      <section className="mt-16 text-center w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800">📖 Toki Pona Dictionary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-6">
          {words.map((word, index) => (
            <div key={index} className="p-4 bg-gray-200 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-700">{word.toki_pona}</h3>
              <p className="text-gray-700">{word.english}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Start Your Toki Pona Journey Today!</h2>
        <Button className="mt-4 px-6 py-3 text-lg">Get Started</Button>
      </section>
    </div>
  );
}

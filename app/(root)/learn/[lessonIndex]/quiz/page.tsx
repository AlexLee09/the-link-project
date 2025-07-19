import React from "react";
import QuizClient from "@/components/quiz/QuizClient";
import { getQuizByLessonId } from "@/lib/actions/quiz.actions";

type QuizPageProps = {
  params: {
    lessonIndex: string;
  };
};
const QuizPage = async ({ params }: QuizPageProps) => {
  const index = parseInt(params.lessonIndex, 10);
  const quiz = await getQuizByLessonId(index);

  const primary = "var(--primary)";
  const primaryBg = "color-mix(in srgb, var(--primary) 10%, transparent)";

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="max-w-4xl w-full px-6 py-12">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ background: primaryBg, color: primary }}
          >
            Interactive Quiz
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: primary }}>
            {quiz.title}
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Test your knowledge and track your progress
          </p>
        </div>
        <QuizClient params={{ quiz: quiz }} />
      </div>
    </div>
  );
};

export default QuizPage;

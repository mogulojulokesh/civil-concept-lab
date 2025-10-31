import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  questions: Question[];
  title: string;
}

const Quiz = ({ questions, title }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      if (!answeredQuestions.includes(currentQuestion)) {
        setScore(score + 1);
        setAnsweredQuestions([...answeredQuestions, currentQuestion]);
      }
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  if (showResult) {
    return (
      <Card className="bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-center">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-4xl font-bold text-primary">
            {score} / {questions.length}
          </div>
          <p className="text-muted-foreground">
            You got {Math.round((score / questions.length) * 100)}% correct!
          </p>
          <Button onClick={resetQuiz}>Retake Quiz</Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="bg-gradient-card">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium">{question.question}</p>

        <div className="space-y-2">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              className="w-full justify-start text-left h-auto py-3"
              onClick={() => handleAnswer(index)}
            >
              {option}
            </Button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div
            className={`p-4 rounded-lg ${
              selectedAnswer === question.correctAnswer
                ? "bg-green-100 dark:bg-green-900/20"
                : "bg-red-100 dark:bg-red-900/20"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {selectedAnswer === question.correctAnswer ? (
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              )}
              <span className="font-semibold">
                {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect"}
              </span>
            </div>
            <p className="text-sm">{question.explanation}</p>
          </div>
        )}

        <Button onClick={handleNext} disabled={selectedAnswer === null} className="w-full">
          {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Quiz;

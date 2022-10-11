import { useState, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { Questions } from "../QuestionBank";
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { setScore, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore();
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore();
    }
    setGameState("end");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button className="btn" onClick={() => setOptionChosen("A")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button className="btn" onClick={() => setOptionChosen("B")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button className="btn" onClick={() => setOptionChosen("C")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button className="btn" onClick={() => setOptionChosen("D")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
};
export default Quiz;

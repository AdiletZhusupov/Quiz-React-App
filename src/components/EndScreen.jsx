import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { Questions } from "../QuestionBank";

const EndScreen = () => {
  const { score, restartQuiz } = useContext(QuizContext);

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>
        {score} / {Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};
export default EndScreen;

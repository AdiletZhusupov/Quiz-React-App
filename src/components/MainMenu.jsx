import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div>
  );
};
export default MainMenu;

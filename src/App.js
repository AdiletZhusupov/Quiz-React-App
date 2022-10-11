import { useContext } from "react";
import EndScreen from "./components/EndScreen";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import { QuizContext } from "./context/QuizContext";
import "./styles.css";

export default function App() {
  const { gameState } = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz</h1>
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "end" && <EndScreen />}
    </div>
  );
}

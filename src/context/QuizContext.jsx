import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  gameState: "menu",
  score: 0
};

export const QuizContext = createContext(initialState);

export const QuizContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setGameState = (state) => {
    dispatch({ type: "SET_GAME_STATE", payload: state });
  };
  const setScore = () => {
    dispatch({ type: "SET_SCORE" });
  };
  const restartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <QuizContext.Provider
      value={{
        gameState: state.gameState,
        score: state.score,
        setGameState,
        setScore,
        restartQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

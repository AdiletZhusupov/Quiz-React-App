export const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_GAME_STATE":
      return { ...state, gameState: action.payload };
    case "SET_SCORE":
      return { ...state, score: state.score + 1 };
    case "RESTART_QUIZ":
      return { gameState: "menu", score: 0 };
    default:
      return state;
  }
};

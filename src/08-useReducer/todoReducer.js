export const todoReducer = (state = [], action = {}) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
      break;
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
      break;
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
      break;
  }
};

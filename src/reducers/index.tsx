const counter = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
      break;
    case "DECREMENT":
      return state - 1;
      break;
    default:
      break;
  }
};

export default counter;

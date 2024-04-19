const initialState = { state: true, clicked: false };

export const setToggle = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case "TOGGLE":
      return (state = { state: !state.state, clicked: !state.clicked });
    // case "CLICKED":
    //   return (state = { state: !state.state, clicked: !state.clicked });
    default:
      return state;
  }
};

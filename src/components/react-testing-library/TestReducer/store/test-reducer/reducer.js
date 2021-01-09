import * as Actions from "./actions";

export const initialState = {
  someDummyTestState: false,
};

export const TestReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SUCCESS.type:
      return {
        ...state,
        someDummyTestState: true,
      };
    case Actions.FAILURE.type:
      return {
        ...state,
        someDummyTestState: false,
      };
    default:
      return state;
  }
};

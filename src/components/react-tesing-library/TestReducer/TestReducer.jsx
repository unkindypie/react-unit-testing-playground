import React from "react";

import * as Actions from "./store/test-reducer/actions";
import {
  TestReducer as Reducer,
  initialState,
} from "./store/test-reducer/reducer";

const TestReducer = () => {
  const [reducerState, dispatch] = React.useReducer(Reducer, initialState);

  const dispatchActionSuccess = React.useCallback(() => {
    dispatch(Actions.SUCCESS);
  }, [dispatch]);

  const dispatchActionFailure = React.useCallback(() => {
    dispatch(Actions.FAILURE);
  }, [dispatch]);

  return (
    <div>
      <div>
        <p>
          someDummyTestState is {reducerState.someDummyTestState.toString()}
        </p>
        <button onClick={dispatchActionSuccess}>Dispatch Success</button>
      </div>
    </div>
  );
};

export default TestReducer;

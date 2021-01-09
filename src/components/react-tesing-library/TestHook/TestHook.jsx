import React from "react";

const TestHook = ({ changeName, name }) => {
  const [state, setState] = React.useState("Initial State");

  const changeState = React.useCallback(() => {
    setState("Initial State Changed");
  }, []);

  const changeNameToSteve = React.useCallback(() => {
    changeName();
  }, [changeName]);

  return (
    <div>
      <button onClick={changeState}>State Change Button</button>
      <p>{state}</p>
      <button onClick={changeNameToSteve}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default TestHook;

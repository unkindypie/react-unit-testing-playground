import React from "react";

import Basic from "./components/enzyme/SnapshotTesting";
import Counter from "./components/enzyme/ImplementationTesting";
import TestHook from "./components/react-testing-library/TestHook";
import TestContext from "./components/react-testing-library/TestContext";
import Context from "./contexts/test-context";
import TestControlledForm from "./components/react-testing-library/TestControlledForm";
import TextAxios from "./components/react-testing-library/TestAxios";

function App() {
  const [state, setState] = React.useState("Some text");
  const [name, setName] = React.useState("Moe");

  const changeName = React.useCallback(() => {
    setName("Steve");
  }, []);

  const changeText = React.useCallback(() => {
    setState("Some other text");
  }, []);

  return (
    <div className="App">
      <Basic />
      <h1>Counter</h1>
      <Counter />
      <h1>Basis Hook useState</h1>
      <TestHook name={name} changeName={changeName} />
      <Context.Provider value={{ changeText, text: state }}>
        <TestContext />
      </Context.Provider>
      <TestControlledForm />
      <TextAxios url="https://jsonplaceholder.typicode.com/posts/1" />
    </div>
  );
}

export default App;

import React, { useContext } from "react";

import Context from "../../../contexts/test-context";

const TestContext = () => {
  const context = useContext(Context);

  return (
    <div>
      <button onClick={context.changeText}>Change Text</button>
      <p>{context.text}</p>
    </div>
  );
};

export default TestContext;

import React, { useState, useEffect } from "react";
import axios from "axios";

const TestAxios = ({ url }) => {
  const [state, setState] = useState();

  useEffect(() => {
    axios.get(url).then((res) => setState(res.data));
  }, [url]);

  return (
    <div>
      <h1> Axios Test </h1>
      {state ? <p data-testid="title">{state.title}</p> : <p>...Loading</p>}
    </div>
  );
};

export default TestAxios;

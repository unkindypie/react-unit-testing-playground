import React from "react";

const ControlledForm = () => {
  const [valueChange, setValueChange] = React.useState("");
  const [valueSubmit, setValueSubmit] = React.useState("");

  const handleChange = React.useCallback((event) => {
    setValueChange(event.target.value);
  }, []);

  const handleSubmit = React.useCallback((event) => {
    event.preventDefault();
    setValueSubmit(event.target.text1.value);
  }, []);

  return (
    <div>
      <h1> React Hooks Form </h1>
      {/* data-testid ищется через getByTestId, который дестракчирется из render() */}
      <form data-testid="my-custom-form-test-id" onSubmit={handleSubmit}>
        <label htmlFor="text1">Input Text:</label>
        <input id="text1" onChange={handleChange} type="text" />
        <button type="submit">Submit</button>
      </form>
      <h3>React State:</h3>
      <p>Change: {valueChange}</p>
      <p>Submit Value: {valueSubmit}</p>
      <br />
    </div>
  );
};

export default ControlledForm;

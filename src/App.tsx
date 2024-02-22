import DayInput from "./components/dayInput";
import DayOutput from "./components/dayOutput";
import {chatGpt} from "./services/chatApi";
import { useState } from "react";

const App = () => {
  const [output, setOutput] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allInputs = e.target.todo;
    const values = [];
    for (let i = 0; i < allInputs.length; i++) {
      values.push(allInputs[i].value);
    }
    values.join(' ,');
    const response = await chatGpt(values);
    setOutput(response);
  }

  return (
    <div className="main">
      <DayInput handleSubmit={handleSubmit} />
      <DayOutput response={output} />
    </div>
  );
};

export default App;

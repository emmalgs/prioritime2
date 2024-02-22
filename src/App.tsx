import DayInput from "./components/dayInput";
import DayOutput from "./components/dayOutput";
import {chatGpt} from "./services/chatApi";
import { useState } from "react";

const App = () => {
  const [output, setOutput] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target)
    const work = e.target.work;
    const chores = e.target.chores;
    const tasks = e.target.tasks;
    const dreams = e.target.dreams;

    const workInputs = work ? Array.from(work).map((input) => input.value) : [];
    const choresInputs = chores ? Array.from(chores).map((input) => input.value) : [];  
    const tasksInputs = tasks ? Array.from(tasks).map((input) => input.value) : []; // Modified line
    const dreamsInputs = dreams ? Array.from(dreams).map((input) => input.value) : [];

    const data = {
      work: workInputs,
      tasks: tasksInputs,
      chores: choresInputs,
      dreams: dreamsInputs,
    };

    console.log({data});
    const response = await chatGpt(data);
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

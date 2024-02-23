import Output from "./output";
import { useState } from "react";
import clock from "../assets/images/clock.gif"

const DayOutput = ({ response }) => {
  const [values, setValues] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const outputs = e.currentTarget.output;
    const outputValues = Array.from(outputs).map(
      (output: HTMLInputElement) => output.value
    );
    setValues(outputValues);
  };

  const outputView =
    values.length > 0 ? (
      <div>
        <ul>
          {values.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
        <button onClick={() => setValues([])}>Edit</button>
      </div>
    ) : (
      <form onSubmit={handleSubmit}>
        {response.map((item, index) => {
          if (item === "") {
            return null;
          } else {
            return <Output key={index} text={item} />;
          }
        })}
        <button type="submit">Save</button>
      </form>
    );

  return (
    <div className="dayOutput">
      <img src={clock} alt="mr time" className="clock"/>
      <h1>Your Day:</h1>
      {outputView}
    </div>
  );
};

export default DayOutput;

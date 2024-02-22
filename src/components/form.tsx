import { useState } from "react";
import Input from "./input";

const Form = () => {
  const [inputCount, setInputCount] = useState(1);

  const addInput = () => {
    setInputCount(inputCount + 1);
  };

  const inputs = Array.from({ length: inputCount }).map((_, index) => (
    <Input key={index} />
  ));

  return (
    <div>
      <button onClick={addInput}>+</button>
      <form className='inputForm'>
        {inputs}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

import { useState } from "react";
import Input from "./input";

const Form = ({ handleSubmit }) => {
  const [inputs, setInputs] = useState([{ key: 0 }]);

  const addInput = () => {
    setInputs([...inputs, { key: inputs.length }]);
  };

  const removeInput = (index) => {
    const newInputs = inputs.filter((input) => input.key !== index);
    setInputs(newInputs);
  };

  const inputView = inputs.map((input, index) => {
    return (
      <Input key={input.key} remove={() => removeInput(input.key)} />
    );
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const allInputs = e.target.todo;
  //   const values = [];
  //   for (let i = 0; i < allInputs.length; i++) {
  //     values.push(allInputs[i].value);
  //   }
  //   values.join(' ,');
  //   const response = await chatGpt(values);
  // }

  return (
    <div>
      <button type="button" className="addInputBtn" onClick={addInput}>+</button>
      <form className='inputForm' onSubmit={handleSubmit}>
        {inputView}
        <p>Plan my day <button type="submit">&#8594;</button></p>
      </form>
    </div>
  );
};

export default Form;

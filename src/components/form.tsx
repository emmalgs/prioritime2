import { useState } from "react";
import Input from "./input";

const Form = ({ category }: { category: string }) => {
  const [inputs, setInputs] = useState<{ key: number }[]>([]);

  const addInput = () => {
    setInputs([...inputs, { key: inputs.length }]);
  };

  const removeInput = (index: number) => {
    const newInputs = inputs.filter((input) => input.key !== index);
    setInputs(newInputs);
  };

  const inputView = inputs.map((input) => {
    return (
      <Input key={input.key} remove={() => removeInput(input.key)} category={category} />
    );
  });

  return (
    <div>
      <div className="formHeader">
        <button type="button" className="addInputBtn" onClick={addInput}>+</button>
        <h2>{category}</h2>
      </div>
      {inputView}
    </div>
  );
};

export default Form;

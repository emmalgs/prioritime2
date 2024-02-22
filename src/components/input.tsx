import { useState } from "react";

interface InputProps {
  remove: () => void;
  category: string;
}

const Input = ({ remove, category }: InputProps) => {
  const [value, setValue] = useState('');
  return (
    <div>
      <button className="removeInputBtn" onClick={remove}>-</button>
      <input className="dayInput" name={category} value={value} onChange={(e) => setValue(e.target.value)} />    
    </div>
  );
}

export default Input;

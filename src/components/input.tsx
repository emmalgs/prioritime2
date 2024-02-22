import { useState } from "react";

const Input = ({ remove }) => {
  const [value, setValue] = useState('');
  return (
    <div>
      <button className="removeInputBtn" onClick={remove}>-</button>
      <input className="dayInput" name='todo' value={value} onChange={(e) => setValue(e.target.value)} />    
    </div>
  );
}

export default Input;

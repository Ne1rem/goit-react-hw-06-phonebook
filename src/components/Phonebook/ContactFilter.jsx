import { useState } from "react";

export const ContactFilter = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={evt => setValue(evt.target.value)}
      ></input>
    </div>
  );
};

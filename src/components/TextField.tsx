import React, { useState, useRef } from 'react';

interface Props {
  message: string;
  age: number;
  Name: string;
  handleChange?: (
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ) => void;
}

const TextField: React.FC<Props> = ({ message, Name, age, handleChange }) => {
  const [count, setCount] = useState<any>(5);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  setCount(null);

  return (
    <div ref={divRef}>
      <p>{message}</p>
      <p>{Name}</p>
      <p>{age}</p>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;

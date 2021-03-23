import React, { useState } from 'react';

// Creating interface just for giving a type to the props of Counter component.
// I actually don't understand what children means here and why or how is it applied.
// The type of the setCount can be taken by hovering over the setCount variable created
// in the useState() hook use and from there press Ctrl or Cmd and then hover on the word
// for which you want to get the defination for.
// And the setCount in interface returns a JSX element as the useState does and can also return null.

interface CounterProps {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null;
}

export const Counter: React.FC<CounterProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return <div>{children({ count, setCount })}</div>;
};

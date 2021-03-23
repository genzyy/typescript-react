import React from 'react';
import logo from './logo.svg';
import './App.css';
// importing the required components same as we did in JS.
import { Counter } from './components/Counter';

const App: React.FC = () => {
  return (
    <div>
      <Counter>
        {({ count, setCount }) => {
          return (
            <div>
              <p>{count}</p>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +1
              </button>
              <button
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -1
              </button>
            </div>
          );
        }}
      </Counter>
    </div>
  );
};

export default App;

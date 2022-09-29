import React, { useState } from 'react';
import { btnsData } from '../data/BtnsData';

const Calculator = () => {
  const [curState, setCurState] = useState('');
  const [input, setInput] = useState(0);

  const handleClick = (e, action) => {
    switch (action) {
      case 'numbers':
        return console.log('numbers');
      case 'operators':
        return console.log('operators');
      case 'reset':
        return console.log('reset');
      case 'minusPlus':
        return console.log('minusPlus');
      case 'percent':
        return console.log('percent');
      case 'equal':
        return console.log('equal');
      default:
        return;
    }
  };

  return (
    <div className="container">
      <div className="screen">{input}</div>
      {btnsData.map((btn, idx) => (
        <div key={idx} className={`btn ${btn.class}`} onClick={(e) => handleClick(e, btn.action)}>
          {btn.content}
        </div>
      ))}
    </div>
  );
};

export default Calculator;

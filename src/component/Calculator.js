import React from 'react';
import { BtnsData } from '../data/BtnsData';

const Calculator = () => {
  return (
    <div className="container">
      <div className="screen">0</div>
      {BtnsData.map((btn, idx) => (
        <div key={idx} className={`btn ${btn.class}`} onClick={btn.action}>
          {btn.content}
        </div>
      ))}
    </div>
  );
};

export default Calculator;

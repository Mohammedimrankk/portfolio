import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const Calculator = () => {
  const [value, setValue] = useState("");

  const operators = ['/', '*', '+', '-', '.'];

  const handleClick = (e) => {
    const input = e.target.value;

    // Prevent multiple operators in a row
    if (operators.includes(input) && (value === '' || operators.includes(value.slice(-1)))) {
      return;
    }

    // Prevent leading zeroes and incorrect decimal usage
    if ((input === '0' && value === '0') || (input === '.' && value.slice(-1) === '.')) {
      return;
    }

    // Update the state with the new value
    setValue(value + input);
  };

  const clear = () => setValue("");

  const deleteLast = () => setValue(value.slice(0, -1));

  const evaluateExpression = () => {
    try {
      // Replace 'x' with '*' for multiplication
      const sanitizedValue = value.replace(/x/g, '*');
      // Basic parser to evaluate the expression safely
      // eslint-disable-next-line no-new-func
      const result = new Function('return ' + sanitizedValue)();
      setValue(result.toString());
    } catch (error) {
      setValue("Error");
    }
  };

  return (
    <div name="calculator" className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <form>
          <div className="mb-4">
            <input 
              type="text" 
              value={value} 
              readOnly 
              className="w-full p-3 text-right text-2xl border rounded-lg bg-gray-100"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            <input type="button" value="AC" onClick={clear} className="col-span-2 p-3 bg-red-500 text-white rounded-lg" />
            <input type="button" value="DE" onClick={deleteLast} className="p-3 bg-gray-500 text-white rounded-lg" />
            <input type="button" value="/" onClick={handleClick} className="p-3 bg-gray-500 text-white rounded-lg" />
            <input type="button" value="7" onClick={handleClick} className="p-3 bg-gray-300 rounded-lg" />
            <input type="button" value="8" onClick={handleClick} className="p-3 bg-gray-300 rounded-lg" />
            <input type="button" value="9" onClick={handleClick} className="p-3 bg-gray-300 rounded-lg" />
            <input type="button" value="x" onClick={handleClick} className="p-3 bg-gray-500 text-white rounded-lg"/>
            <input type="button" value="4" onClick={handleClick} className="p-3 bg-gray-300 rounded-lg" />
            <input type="button" value="5" onClick={handleClick} className="p-3 bg-gray-300 rounded-lg" />
            <input type="button" value="6" onClick={handleClick} className="p-3 bg-gray-300 rounded-lg" />
            <input type="button" value="+" onClick={handleClick} className="p-3 bg-gray-500 text-white rounded-lg" />
            <input type="button" value="1" onClick={handleClick} className="p-3 bg-gray-300 rounded-lg" />
            <input type="button" value="2" onClick={handleClick} className="p-3 bg-gray-300 rounded-lg" />
            <input type="button" value="3" onClick={handleClick} className="p-3 bg-gray-300 rounded-lg" />
            <input type="button" value="-" onClick={handleClick} className="p-3 bg-gray-500 text-white rounded-lg" />
            <input type="button" value="00" onClick={handleClick} className="p-3 bg-gray-300 rounded-lg" />
            <input type="button" value="0" onClick={handleClick} className="p-3 bg-gray-300 rounded-lg" />
            <input type="button" value="=" onClick={evaluateExpression} className="col-span-2 p-3 bg-blue-500 text-white rounded-lg" />
          </div>
        </form>
      </div>      
    </div>
  );
}

export default Calculator;

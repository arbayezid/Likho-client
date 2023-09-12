import React, { useState } from "react";

const Calculator = () => {
  // State to hold the input values and result
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  // Function to handle calculation
  const calculate = () => {
    // Convert input values to numbers
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    // Check if the inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
      // Perform the calculation (for example, addition)
      const sum = num1 + num2;
      setResult(`Result: ${sum}`);
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input
        type="text"
        placeholder="Enter number 1"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter number 2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>
      <p>{result}</p>
    </div>
  );
};

export default Calculator;

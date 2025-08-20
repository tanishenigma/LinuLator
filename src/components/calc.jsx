import React from "react";

const Numbers = () => {
  const buttons = [
    ["AC", "+/-", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["0", ",", "="],
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-4 gap-4 text-2xl">
        {buttons.map((row, rowIndex) =>
          row.map((btn, colIndex) => {
            const isOperator = ["÷", "×", "−", "+", "="].includes(btn);
            const isZero = btn === "0";

            return (
              <button
                key={`${rowIndex}-${colIndex}`}
                className={`
                  flex items-center justify-center h-20 rounded-full 
                  ${isZero ? "col-span-2 w-full bg-charcoal text-white" : ""}
                  ${
                    isOperator
                      ? "bg-orange text-white font-bold w-20"
                      : "bg-charcoal text-white w-20"
                  }
                `}>
                {btn}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Numbers;

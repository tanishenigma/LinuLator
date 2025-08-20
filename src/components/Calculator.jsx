const Calculator = ({ calc, setCalc }) => {
  const buttons = [
    ["AC", "+/-", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const numClickHandler = (value) => {
    if (calc.num.length < 16) {
      setCalc({
        ...calc,
        num: calc.num === "0" ? value : calc.num + value,
      });
    }
  };

  const decimalClickHandler = () => {
    if (!calc.num.includes(".")) {
      setCalc({
        ...calc,
        num: calc.num + ".",
      });
    }
  };

  const signClickHandler = (value) => {
    setCalc({
      ...calc,
      sign: value,
      res: calc.res === "0" ? calc.num : calc.res,
      num: "",
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "−"
          ? a - b
          : sign === "×"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "÷"
            ? "Can't divide by 0"
            : String(math(Number(calc.res), Number(calc.num), calc.sign)),
        sign: "",
        num: "",
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? String(Number(calc.num) * -1) : "",
      res: calc.res !== "0" ? String(Number(calc.res) * -1) : "0",
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(calc.num) : 0;
    let res = calc.res ? parseFloat(calc.res) : 0;
    setCalc({
      ...calc,
      num: String(num / 100),
      res: String(res / 100),
    });
  };

  const resetClickHandler = () => {
    setCalc({
      sign: "",
      num: "0",
      res: "0",
    });
  };

  const backspaceClick = () => {
    setCalc({
      ...calc,
      num: calc.num.length > 1 ? calc.num.slice(0, -1) : "0",
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-4 gap-4.5 text-4xl">
        {buttons.flat().map((btn, idx) => {
          const isOperator1 = ["AC", "+/-", "%", "÷"].includes(btn);
          const isOperator2 = ["÷", "×", "−", "+", "="].includes(btn);
          const isZero = btn === "0";

          const handleClick = () => {
            if (btn === "AC") resetClickHandler();
            else if (btn === "+/-") invertClickHandler();
            else if (btn === "%") percentClickHandler();
            else if (btn === "=") equalsClickHandler();
            else if (["÷", "×", "−", "+"].includes(btn)) signClickHandler(btn);
            else if (btn === ".") decimalClickHandler();
            else if (btn === "⌫") backspaceClick(); // ✅ Fixed check
            else numClickHandler(btn);
          };

          return (
            <button
              key={idx}
              onClick={handleClick}
              className={`
                flex items-center justify-center rounded-full w-20 h-20
                ${
                  isZero
                    ? "col-span-2 w-full bg-charcoal text-white"
                    : isOperator1
                    ? "bg-lightCharcoal text-black"
                    : isOperator2
                    ? "bg-orange text-white font-bold"
                    : "bg-charcoal text-white"
                }
              `}>
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;

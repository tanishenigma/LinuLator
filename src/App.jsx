import { useState } from "react";
import Calculator from "./components/Calculator";
import { Operations } from "./components/Operations";
function App() {
  let [calc, setCalc] = useState({
    sign: null,
    num: "0",
    res: "0",
  });
  const backspaceClick = () => {
    setCalc({
      ...calc,
      num: calc.num.length > 1 ? calc.num.slice(0, -1) : "0",
    });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen  ">
        <div className="flex flex-col items-end">
          <Operations
            display={
              `${calc.res !== "0" ? calc.res : ""} ${calc.sign || ""} ${
                calc.num !== "0" ? calc.num : ""
              }`.trim() || "0"
            }
            backspaceClick={backspaceClick}
          />
          <Calculator
            calc={calc}
            setCalc={setCalc}
            backspaceClick={backspaceClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;

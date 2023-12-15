import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toplam, cixma, vurma, bolme } from "./calculatorSlice";
import "./calculator.scss";

function Calculator() {
  const calculator = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [num1, setNum1] = useState(" ");
  const [num2, setNum2] = useState(" ");

  return (
    <div>
      <div className="counterContainer">
        <div className="calculator">
          <div className="calculatorInput">
            <input
              type="text"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="enter a number1"
            />
            <input
              type="text  "
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="enter a number 2"
            />
            <h3>{calculator}</h3>
          </div>
          <div className="calculatorHesab">
            <span
              onClick={() =>
                dispatch(toplam({ number1: +num1, number2: +num2 }))
              }
            >
              +
            </span>
            <span
              onClick={() =>
                dispatch(cixma({ number1: +num1, number2: +num2 }))
              }
            >
              -
            </span>
            <span
              onClick={() =>
                dispatch(vurma({ number1: +num1, number2: +num2 }))
              }
            >
              *
            </span>
            <span
              onClick={() =>
                dispatch(bolme({ number1: +num1, number2: +num2 }))
              }
            >
              /
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;

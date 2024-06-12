import { useState } from "react";
import "./styles.css";
import Button from "../Button/Button";

function Counter() {
  const [count, setCount] = useState<number>(5);

  //альтернатива деструктуризации массива в строчке 5, который возвращает вызов хука useState
  // const count = result[0];
  // const setCount = result[1];
  // console.log(count);
  // console.log(setCount);

  console.log("Render");

  // let a = 1;
  // console.log(a);
  // a = 2;
  // console.log(a);

  const onMinusClick = ():void => {
    setCount((prevCount) => prevCount - 1);
  };

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  return (
    <div className="counter-component">
      <Button name="-" onClick={onMinusClick} />
      <div className="counter-result">{count}</div>
      <Button name="+" onClick={onPlusClick} />
    </div>
  );
}

export default Counter;

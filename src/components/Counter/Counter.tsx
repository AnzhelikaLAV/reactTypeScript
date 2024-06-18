//import { useState } from "react";
import Button from "components/Button/Button";
import { CounterComponent } from './styles';
import { CounterResult } from "./styles";
import { CounterProps } from "./types";

function Counter({ count, onMinus, onPlus }: CounterProps) {
  //const [count, setCount] = useState<number>(5);

  //альтернатива деструктуризации массива в строчке 5, который возвращает вызов хука useState
  // const count = result[0];
  // const setCount = result[1];
  // console.log(count);
  // console.log(setCount);

  // console.log("Render");

  // let a = 1;
  // console.log(a);
  // a = 2;
  // console.log(a);

  // const onMinusClick = (): void => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  // const onPlusClick = (): void => {
  //   setCount((prevValue) => prevValue + 1);
  // };

  return (
    <CounterComponent>
      <Button name="-" onClick={onMinus} />
      <CounterResult>{count}</CounterResult>
      <Button name="+" onClick={onPlus} />
    </CounterComponent>
  );
}

export default Counter;

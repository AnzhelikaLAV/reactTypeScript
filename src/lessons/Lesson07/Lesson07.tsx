import { useState } from "react";
import Counter from "components/Counter/Counter";
import "./styles.css";

function Lesson07() {
  //generic
  type CustomArrayType<T> = T[];
  const numberArray: CustomArrayType<string> = ["string", "string1"];
  const booleanArray: CustomArrayType<boolean> = [true, false, true];

  type CustomTupel<T = number> = [number, string, T]; //<T=number> значение по умолчанию

  const arrayMix: CustomTupel<string> = [2, "blue", "black"];
  const arrayMix2: CustomTupel = [3, "red", 4];

  //generic & interface
  interface Fruits<T> {
    title: string;
    address: T;
  }

  const fruit1: Fruits<number> = {
    title: "Apple",
    address: 29,
  };

  interface Address {
    country: string;
    city: string;
  }

  const fruit2: Fruits<Address> = {
    title: "Orange",
    address: {
      country: "Germany",
      city: "Berlin",
    },
  };

  // enum - перечисления
  enum Colors {
    Red,
    Black = 4,
    Green,
  } //5, потому что мы поставили блек 4
  let color: Colors = Colors.Green;

  console.log(Colors.Green);

  //enum + object
  enum UserRole {
    ADMIN = "Admin",
    USER = "User",
    Guest = "Guest",
  }

  interface User {
    name: string;
    role: UserRole;
  }

  const adminUser: User = {
    name: "Alice",
    role: UserRole.ADMIN,
  };

  const adminUser2: User = {
    name: "Alex",
    role: UserRole.ADMIN,
  };

  //Поднятие состояния
  const [count, setCount] = useState<number>(5);

  const onMinusClick = (): void => {
    setCount((prevCount) => prevCount - 1);
  };

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  //3. способ - inline стили(создание отдельного объекта)
  const borderObjStyles = {
    borderStyle: "solid",
    fontSize: "34px",
    color:  '#230547',
  };
  return (
    // 1. способ - отдельный css файл
    <div className="lesson07-component">
      <div style={borderObjStyles}>Start</div>
      {/* 2. способ - inline стили */}
      <p style={{ fontSize: "24px", color: " #954BF2" }}>
        Inline style example
      </p>
      <Counter count={count} onMinus={onMinusClick} onPlus={onPlusClick} />
      <div style={borderObjStyles}>End</div>
    </div>
  ); //lesson07 родит компонент каунтера
}

export default Lesson07;

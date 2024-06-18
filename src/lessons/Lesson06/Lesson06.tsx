function Lesson06() {
  //1.типизация строк- String

  let userName: string = "Bob";

  //userName = true
  userName = 1 + 2 + "3"; // 33

  //userName = '4' - '2';

  let message: string = `Hello, ${userName}`;

  // let message: number;
  // message = `Hello, ${userName}`нельзя в намбер присвоить строку

  //2.типизация чисел- number
  let luckyNumber: number = 7;

  luckyNumber = 7.1;

  luckyNumber = NaN;

  //3.типизация логического типа- boolean

  let isAdmin: boolean = true;

  isAdmin = false;

  //isAdmin 2 > 3;
  console.log(isAdmin);

  //isAdmin = undefined;

  //4.типизация null и undefined

  let emptyValue: null = null;

  // emptyValue = 0;

  // emptyValue = undefined;

  let empty: undefined = undefined;

  //empty = 0;

  // 5.типизация массива

  const colors: string[] = ["red", "black", "green"];

  //colors.push(34)
  colors.push("34"); //изменяем методом push
  colors.push(""); //можем оставить пустую строку

  //colors[0] = true; //не тот тип

  colors[0] = "yellow";

  console.log(colors);

  //6. тип tupel-кортеж- определяем массив фиксированной длины с элементами разных

  //const fruits: [string, number] = ['apples', 3];// длина равна 2, нельзя добавить 3й элемент

  const fruits: [string, number, boolean] = ["apples", 3, true];

  //fruits[2] = true;

  //7. типизация функций

  const showMessage = (): void => console.log("Hello"); //ничего не возвращает, типизация указывается после круглых скобок

  showMessage();

  const showNumber = (): number => {
    //указываем тип тому что возвращает функция
    return 4;
  };

  console.log(showNumber());

  //8.типизация any

  let city: any = 23;

  city = "Warshaw";

  city = [2, "", true];

  //9. типизация функций с параметрами

  const arrUser = (
    firstName: string = "User",
    age: number = 30
  ): [string, number] => {
    return [firstName, age];
  };
  arrUser("Mary", 25);
  //arrUser("Tom", '2');

  //arrUser() пустую без параметров нельзя, будет underfind, а это другой тип. Можно если мы записываем сразу значения user/30 в массиве см.выше

  //10. автоматическое определение типа

  const numArr = [2, 4, 5];

  //numArr.push("red"); //не можем тк в массиве автоматически определился тип number

  let str = true;

    //str = ""; //Тип "string" не может быть назначен для типа "boolean"
    
    //const mixArray = ['grape', 5, false, null];

    //mixArray[4] = undefined;//ошибка такого типа не было изначально в массиве

    const mixArray = [5, false, null];

    //mixArray[4] = 'red' //если удалили строку, то и не можем позже добавить тк остался number, boolean, null

    
    //11. Union типы позволяют объединять несколько типов

    let numStr: string | number | number[] = 2;

    numStr = '3' //тогда переменная может принять любой тип через юнит или строку или число

    numStr = [2, 3, 6]

    //numStr = [2, 3, ''];//нельзя

//12. Типизация объектов с помощью Interface 
  interface User{
    name?: string,//необязательный параметр
    age: number
}
  
  interface User {// не перезаписывается, а добавляется новое значение
job: string
  }

  const userData: User = {
    name: 'Mary',
    age: 25,
    job: 'manager'
  }
  
  //  userData.job = 'Manager'//нету типа
  
  // userData.age = '26'// нельзя
  
  interface Admin extends User{
    isAdmin: boolean
  }

  const adminData: Admin = {
    age: 34,
    job: 'Admin',
    isAdmin: false
}

  
  // 13. типизация объектов
type Weight = string | number;

  type Animal = {
    name: string,
    weight?: Weight
  }

  
  const animal: Animal = {
    name: "Lion",
    weight: " 200", //потому что в типе Weight string | number;
  };
  
  type NewAnimal = Animal & { country: string }//расширяем тип? типы и интефейсы пишем с большой
  
  const newAnimal: NewAnimal = {
    country: 'Afrika',
    name: 'Zebra',
    weight: 150
  }


  return <div>Lesson06 - {message}</div>;
}

export default Lesson06;

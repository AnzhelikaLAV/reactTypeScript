import "./styles.css";

function OldButton({ name = "Get", isPrimary = true }) {
  //Лекция 2
  // const buttonName = "Get data";
  // const sendButton = "Send";
  // const getButton = "Get";
  // const isGetButton = false;
  // const buttonClass = "button-component";

  // Лекция 3
  const buttonClass = isPrimary ? "primary-button" : "delete-button";
  // console.log(name, isPrimary);
  // 1 вариант
  // return <button className={buttonClass}>{buttonName}</button>;
  //
  // 2 вариант
  // return (
  //   <div>
  //     <h2>Button</h2>
  //     <button className={buttonClass}>
  //       {isGetButton ? getButton : sendButton}
  //     </button>
  //   </div>
  // );
  //
  // 3 вариант
  // return (
  //   <button className={buttonClass}>
  //     {isGetButton ? getButton : sendButton}
  //   </button>
  // );
  //
  // 4 вариант
  //button-component
  return <button className={`button-component ${buttonClass}`}>{name}</button>;
}

export default OldButton;

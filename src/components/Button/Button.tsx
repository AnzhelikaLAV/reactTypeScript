import { ButtonProps } from "../types";
import "./styles.css";

function Button({ name, type = "button", onClick }: ButtonProps) {
  return (
    <button
      className="button"
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;

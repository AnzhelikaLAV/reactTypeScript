import { InputProps } from "./types";
import { InputContainer, Label, InputElement, ErrorMessage } from "./styles";

function Input({
  name,
  placeholder,
  type = "text",
  label,
  value,
  onChange,
  error
}: InputProps) {
  //console.log('Input update')
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputElement
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </InputContainer>
  );
}

export default Input;

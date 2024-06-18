import {SelectComponent, SelectElement, Label} from './styles'
import { SelectProps } from "./types"

function Select ({idSelect, name, labelName, children}: SelectProps) {
    //console.log(idSelect);
    return (
      <SelectElement>
        {labelName ? (<Label htmlFor={idSelect}>{labelName}</Label>) : (null)}

        <SelectComponent id={idSelect} name={name}>
          {children}
        </SelectComponent>
      </SelectElement>
    );
}

export default Select
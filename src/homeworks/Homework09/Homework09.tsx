import Input from "components/Input/Input";
import { Homework09Component, ResultBlock, Result } from "./styles";
import Button from "components/Button/Button";
import { ChangeEvent, useState } from "react";

function Homework09() {
  const [firstNote, setFirstNote] = useState<string>("");
  const [secondNote, setSecondNote] = useState<string>("");
  const [isShowInputResults, setIsShowInputResult] = useState<boolean>(false);
  const [resultFirstNote, setResultFirstNote] = useState<string>('')

  const firstNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNote(event.target.value);
  };

  const secondNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondNote(event.target.value);
    setResultFirstNote(firstNote);
  };

  const changeResultVisible = () => {
    // setIsShowInputResult(true);
    setIsShowInputResult(!isShowInputResults);
  };

  return (
    <Homework09Component>
      <Input
        name="first-note"
        placeholder="First note"
        value={firstNote}
        onChange={firstNoteOnChange}
      />
      <Input
        name="second-note"
        placeholder="Second note"
        value={secondNote}
        onChange={secondNoteOnChange}
      />
      <Button name="Show result" onClick={changeResultVisible} />
      <ResultBlock isShowResult={isShowInputResults}>
        <Result>{resultFirstNote}</Result>
        <Result>{secondNote}</Result>
      </ResultBlock>
    </Homework09Component>
  );
}

export default Homework09;

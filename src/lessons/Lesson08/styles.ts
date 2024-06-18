import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ButtonStyledComponentProps {
  mainButton?: boolean;
}

const commonBoxStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Lesson08Component = styled.div`
  ${commonBoxStyles}
  gap: 20px;
  flex: 1;
  padding: 40px;
`;
export const BoxInfo = styled.div`
 ${commonBoxStyles}
  width: 250px;
  height: 250px;
  background-color: #8319e6;
`;

export const ButtonStyledComponent = styled.button<ButtonStyledComponentProps>`
  width: 200px;
  height: 70px;
  border: none;
  /* background: #e619a5; */
  background: ${(props) => (props.mainButton ? "#e619a5" : "#C619E6")};
  border-radius: 6px;
  font-size: ${({ mainButton }) => (mainButton ? "24px" : "20px")};
  padding: 10px;
  cursor: pointer;

  &:hover{
    background: #e1a317;
  }
`;

export const ButtonsBox = styled.div`
${commonBoxStyles}
flex-direction: row;
  width: 700px;
  height: 200px;
  background: #e1a3e9;
  gap: 30px;
  padding: 20px;
`;

import styled from "@emotion/styled";

interface ResultBlockProps {
  isShowResult: boolean;
}

export const Homework09Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 700px;
  padding: 40px;
`;

export const ResultBlock = styled.div<ResultBlockProps>`
  display: ${({ isShowResult }) => 
    isShowResult ? "flex" : "none"};
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  min-width: 300px;
  min-height: 200px;
  background: #cced96;
  font-size: 30px;
`;

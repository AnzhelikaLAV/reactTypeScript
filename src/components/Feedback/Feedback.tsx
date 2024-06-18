import Button from "components/Button/Button";
import { FeedbackContainer } from './styles';
import { FeedbackResultContainer } from "./styles";
import { LikeDislikeContainer } from "./styles";
import { Result } from "./styles";
import { FeedbackProps } from "./types";

function Feedback({ like, dislike, addLike, addDislike, resetResults }: FeedbackProps) {
  // const [like, setLike] = useState<number>(0);
  // const [dislike, setDislike] = useState<number>(0);

  // const addLike = (): void => {
  //   setLike((prevValue) => prevValue + 1);
  // };

  // const addDislike = (): void => {
  //   setDislike((prevValue) => prevValue + 1);
  // };

  // const resetResults = (): void => {
  //   setLike(0);
  //   setDislike(0);
  //   };

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>{like}</Result>
          <Button name="Like" onClick={addLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Button name="Dislike" onClick={addDislike} />
          <Result>{dislike}</Result>
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="Reset results" onClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;

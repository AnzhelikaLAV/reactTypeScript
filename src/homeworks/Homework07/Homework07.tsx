import { useState } from "react";
import Feedback from "components/Feedback/Feedback";
import "./styles.css";

function Homework07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const addLike = (): void => {
    setLike((prevValue) => prevValue + 1);
  };

  const addDislike = (): void => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };
  return (
    <div className="homework07-component">
      <Feedback
        like={like}
        dislike={dislike}
        addLike={addLike}
        addDislike={addDislike}
        resetResults={resetResults}
      />
    </div>
  );
}

export default Homework07;

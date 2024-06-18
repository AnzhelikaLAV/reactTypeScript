import { useEffect, useState } from "react";
import { v4 } from "uuid";

import {
  ButtonsContainer,
  CatFactWrapper,
  FactsBlock,
  Lesson10Component,
  SpinnerContainer,
} from "./styles";

import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";

function Lesson10() {
    const [facts, setCatFacts] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    

  const getCatFact = async () => {
      try {
        setIsLoading(true)
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error("API error"), { errorResult: result });
      } else {
        setCatFacts((prevValue) => [...prevValue, result.fact]);
      }
    } catch (error) {
      console.log("Error");
      } finally {
          setIsLoading(false)
    }
  };

  useEffect(() => {
    getCatFact();
  }, []);
    
    const getMoreFact = () => {
getCatFact();
    }

    const deleteAllFacts = () => {
      setCatFacts([]);
    };

    const catFacts = facts.map((fact) => {
        return <CatFactWrapper key={v4()}>{ fact}</CatFactWrapper>
    })

    console.log(facts)

  return (
    <Lesson10Component>
      <ButtonsContainer>
        <Button name=" Get more info" onClick={getMoreFact} />
        <Button name=" Delete all Facts" onClick={deleteAllFacts} />
      </ButtonsContainer>
      <FactsBlock isHideBlock={!facts.length}>{catFacts}</FactsBlock>
      {isLoading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </Lesson10Component>
  );
}

//условный рендеринг isLoading true?, то показывай элемент : null/ либо показывай, либо скроль
//  {
//    isLoading && (
//      <SpinnerContainer>
//        <Spinner />
//      </SpinnerContainer>
//    );
//  }

export default Lesson10;

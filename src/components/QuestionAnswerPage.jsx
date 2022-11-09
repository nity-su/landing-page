import styled from "styled-components";
import { ReactComponent as TumbsUp } from "@assets/svg/tumbsUp.svg";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 389px;
  height: 333px;
  background-color: darkgray;
`;

const Title = styled.div`
  position: absolute;
  width: 142px;
  height: 17px;
  left: 124px;
  top: 20px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

const QuestionAsnwerWrapper = styled.div`
  margin-top: 17px;
`;

const QuestionAsnwerBox = styled.div`
  width: 389px;
`;

const QuestionBox = styled.div`
  position: relative;
  width: 389px;
  height: 42px;
`;

const QuestionTextBox = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

const AnswerBox = styled.div``;

export default function QuestionAnswerPage() {
  const QA_DATA = {
    WhereToBuy: {
      Question: "어디에서 구매해야 하나요?",
      Answer: "(예를들어) 구매 링크를 따라가시면...",
    },
    HowTomuch: {
      Question: "가격은 얼마나 하나요?",
      Answer: "할인에 따라 다르며 평균적으로 X0000원입니다",
    },
    IsInstallWallet: {
      Question: "블록체인 지갑을 설치해야만 하나요?",
      Answer:
        "네,  구매하신 NFT는 블록체인 지갑에 존재하게 되고 지갑에 있는  NFT를 열쇠로하여(아이디와 비번통합) 접속하시기 때문에 필수설치하셔야 합니다. 설치에 대한 안내는 아래 링크를 참조해 주세요",
    },
  };

  return (
    <Container>
      <Title>자주하는 질문 정리</Title>
      <QuestionAsnwerWrapper>
        <QuestionAsnwerBox>
          <Question data={QA_DATA.WhereToBuy} />
        </QuestionAsnwerBox>
      </QuestionAsnwerWrapper>
    </Container>
  );
}

function Question({ data }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <QuestionBox>
      <QuestionTextBox
        onClick={() => {
          setShowAnswer(showAnswer ? false : true);
        }}
      >
        {data.Question}
      </QuestionTextBox>
      {showAnswer ? <Answer answer={data.Answer} /> : null}
    </QuestionBox>
  );
}

function Answer({ answer }) {
  return (
    <AnswerBox>
      {answer}
      <TumbsUp width={15} height={15} />
    </AnswerBox>
  );
}

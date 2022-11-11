import styled from "styled-components";
import { ReactComponent as TumbsUp } from "@assets/svg/tumbsUp.svg";
import { ReactComponent as RightArrow } from "@assets/svg/rightArrow.svg";
import { useState } from "react";

// 주의사항. wrapper > box
// wrapper는 box의 부모 컴포넌트이다.

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-bottom: 47px;
  background: #f5f5f5;
`;
// Title width 142px 맞추면 줄바꿈 현상.
const Title = styled.span`
  position: absolute;
  width: auto;
  height: 17px;
  padding: 0px;
  margin-top: 20px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #000000;
`;

const QuestionAsnwerWrapper = styled.div`
  margin-top: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

const QuestionAsnwerBox = styled.div`
  width: 389px;
`;

const QuestionBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 389px;
  height: 42px;
  background: #fbfbfb;
`;

const QuestionTextBox = styled.div`
  padding-left: 38px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #000000;
`;

const AnswerBox = styled.div`
  position: relative;
  width: 325px;
  height: 155px;
  padding: 20px 28px 0px 36px;
  background: #ffffff;
  margin: 0px 37px 0px 28px;
  animation-name: ${(props) => {
    return props.expand ? "shape" : "";
  }};
  animation-duration: 1s;

  @keyframes shape {
    from {
      height: 0px;
      opacity: 0;
    }
    to {
      height: 155px;
      opacity: 1;
    }
  }

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  vertical-align: top;

  color: #000000;
  white-space: pre-line;
  word-spacing: -1px;
  letter-spacing: -0.5px;
`;

const TumbsUpBox = styled.div`
  position: absolute;
  left: 39px;
  bottom: 4px;
`;

const ArrowBox = styled.div`
  position: absolute;
  right: 30px;
  transform: ${(props) => (props.isTurn ? "rotate(90deg)" : null)};
`;

export default function QuestionAnswerPage() {
  const [showAnswer, setShowAnswer] = useState(() => {
    let array = [];

    for (let i = 0; i < 3; i++) array.push(false);

    return array;
  });

  const QA_DATA = [
    {
      Question: "1.어디에서 구매해야 하나요?",
      Answer: "(예를들어) 구매 링크를 따라가시면...",
    },
    {
      Question: "1.가격은 얼마나 하나요?",
      Answer: "할인에 따라 다르며 평균적으로 X0000원입니다",
    },
    {
      Question: "1.블록체인 지갑을 설치해야만 하나요?",
      Answer:
        "네,  구매하신 NFT는 블록체인 지갑에 존재하게 되고 지갑에 있는 NFT를 열쇠로하여(아이디와 비번통합) 접속하시기 때문에 필수설치하셔야 합니다. \n\n 설치에 대한 안내는 아래 링크를 참조해 주세요",
    },
  ];

  return (
    <Container>
      <Title>자주하는 질문 정리 FAQ</Title>
      <QuestionAsnwerWrapper>
        {QA_DATA.map((e, i) => {
          return (
            <QuestionAsnwerBox key={i}>
              <Question
                data={e.Question}
                setShowAnswer={setShowAnswer}
                index={i}
                state={showAnswer[i]}
              />
              {showAnswer[i] ? (
                <Answer expand={showAnswer[i]} answer={e.Answer} />
              ) : null}
            </QuestionAsnwerBox>
          );
        })}
      </QuestionAsnwerWrapper>
    </Container>
  );
}

function Question({ data, setShowAnswer, state, index }) {
  return (
    <QuestionBox
      onClick={() => {
        setShowAnswer((array) => {
          array[index] = state ? false : true;
          return [...array];
        });
      }}
    >
      <QuestionTextBox>{data}</QuestionTextBox>
      <ArrowBox isTurn={state}>
        <RightArrow />
      </ArrowBox>
    </QuestionBox>
  );
}

function Answer({ answer, expand }) {
  return (
    <AnswerBox expand={expand}>
      {answer}
      <TumbsUpBox>
        <TumbsUp width={15} height={15} />
      </TumbsUpBox>
    </AnswerBox>
  );
}

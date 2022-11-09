import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 1024px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  color: #fdfbfc;
  background-color: #1c1817;
`;

const LogoLion = styled.div`
  display: flex;
  flex-direction: column;
  div {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 800;
  }
`;
const TitleText = styled.div`
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  div {
    font-size: 36px;
    font-weight: 800;
  }
`;
const EndingCredit = styled.div`
  margin-top: 20px;
  div: {
    font-family: "Inter";
    font-weight: 400;
  }
  div:nth-child(1) {
    margin-bottom: 10px;
    font-size: 12px;
  }
  div:nth-child(2) {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoLion>
        <div>LIKELION</div>
        <div>BLOCKCHAIN</div>
        <div>SCHOOL</div>
      </LogoLion>
      <TitleText>
        <div>TEAM 15</div>
        <div>PORTFOLIO</div>
      </TitleText>
      <EndingCredit>
        <div>도와주신분들 ...</div>
        <div>한상훈 장이화 정지원 이승태 최영은 김의왕 h622 ...</div>
      </EndingCredit>
    </FooterContainer>
  );
}

export default Footer;

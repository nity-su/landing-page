import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 600px;
  color: #fdfbfc;
  background-color: #1c1817;
`;

function Footer() {
  return (
    <Container>
      <div>
        <div>LIKELION</div>
        <div>BLOCKCHAIN</div>
        <div>SCHOOL</div>
      </div>
      <div>
        <div>TEAM 15</div>
        <div>PORTFOLIO</div>
      </div>
      <div>
        <div>도와주신분들</div>
        <div>한상훈 장이화 정지원 ...</div>
      </div>
    </Container>
  );
}

export default Footer;

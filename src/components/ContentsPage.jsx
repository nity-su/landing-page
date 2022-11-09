import styled from "styled-components";
import { BsMusicNoteBeamed } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c73ac7;
`;

const HeaderText = styled.span`
  color: rgba(255, 255, 255, 0.64);
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  line-height: 30px;
`;

const MainText = styled.span`
  color: #00ff2a;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BodyText = styled.span`
  color: #ffffff;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
`;

export default function ContentsPage() {
  return (
    <Container>
      <HeaderText>
        <BsMusicNoteBeamed className="icone" color="green" />
        <br />
        <br />
        열렬한 팬들을 위해 <br />
        준비한 프로젝트!!!
        <BsMusicNoteBeamed className="icone" color="blue" />
      </HeaderText>

      <br />
      <br />
      <br />
      <MainText>음악 앨범 NFT</MainText>
      <br />
      <br />
      <br />

      <BodyText>
        1.나만의 가상공간에서 팬들과 소통하세요.
        <br />
        <br />
        <br />
        2.스타와 함께 성장하는 NFT의 소유자가 됩니다.
        <br />
        <br />
        <br />
        3.나의 스타와 특별한 소통 그리고 선물이 있어요.
        <br />
        <br />
        <br />
        4.거품을 없애 저렴하고 친환경적인 앨범입니다.
        <br />
        <br />
        <br />
      </BodyText>
      <img className="metaBusImage" alt="metaBus" src="img/metaBus.jpg" />
    </Container>
  );
}

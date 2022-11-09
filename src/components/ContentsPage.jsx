import styled from "styled-components";
import { BsMusicNoteBeamed } from "react-icons/bs";
import musicImage from "@assets/images/meter_music.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c73ac7;
`;


const Square = styled.div`
  position: absolute;
  width: 353px;
  height: 242px;
  left: 17px;
  top: 476px;
  background: rgba(255, 255, 255, 0.301);
  border-radius: 16px;
`;

// width: 100%;
// height: auto;

const MusicImage = styled.img`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: flex-end;
`;

const HeaderText = styled.span`
  color: rgba(0, 0, 0, 0.64);
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  line-height: 30px;
`;

const MainText = styled.span`
  color: #b7d3bc;
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
        What we want to service <br />
        for a great fan of music
        <BsMusicNoteBeamed className="icone" color="blue" />
      </HeaderText>

      <br />
      <br />
      <br />
      <MainText>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
            stroke="#2329D6"
            stroke-linejoin="round"
          />
          <path d="M3 7L12 12L21 7" stroke="#2329D6" />
          <path d="M12 12V22" stroke="#2329D6" />
        </svg>
        Music Album with NFT
      </MainText>
      <br />
      <br />
      <br />
      <Square>
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
      </Square>
      <MusicImage src={musicImage} />
    </Container>
  );
}

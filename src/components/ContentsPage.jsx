import styled from "styled-components";
import font from "@assets/font.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f5f5f5;
`;

const HeaderText = styled.span`
  margin-top: 20px;
  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #000000;

  div {
    height: 15px;
    margin: 10px 10px;
    line-height: 15px;
    font-size: 14px;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const MainText = styled.span`
  display: flex;
  padding: 44px 0px;
  justify-content: center;
  align-items: center;
  span {
    padding-left: 7px;
    font-size: 16px;
    color: #000000;
    font-family: "Cafe24Danjunghae";
  }
`;

const Square = styled.div`
  width: 353px;
  height: 242px;
  left: 17px;
  top: 476px;
  background: rgba(35, 41, 214, 0.08);
  border-radius: 16px;
`;

const BodyText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  div {
    height: 20px;
    margin: 18px 20px;
    line-height: 20px;
    font-size: 14px;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export default function ContentsPage() {
  return (
    <Container>
      <HeaderText>
        <div>What we want to service for a great fan of music</div>
      </HeaderText>
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
        <span> Music Album with NFT</span>
      </MainText>
      <Square>
        <BodyText>
          <div>
            나만의 가상공간에 친구들을 불러서 음악과 뮤직비디오를 감상할 수
            있습니다.
          </div>
          <div>
            스타들과의 특별한 커뮤니케이션과 한정판 굿즈들이 제공됩니다.
          </div>
          <div>
            스타와 함께 성장하는 NFT의 소유자가 될 수 있습니다. 스타와 함께
            부자가 될지도 모릅니다.
          </div>
          <div>
            오프라인 유통마진을 없앤 저렴한 친환경 NFT 앨범으로 제작됩니다.
          </div>
        </BodyText>
      </Square>
    </Container>
  );
}

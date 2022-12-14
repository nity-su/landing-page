import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f5f5f5;
`;

const MainText = styled.span`
  display: flex;
  padding: 44px 0px;
  justify-content: center;
  align-items: center;
  span {
    padding-left: 7px;
    font-size: 16px;
    font-family: "Inter";
    font-weight: 700;
    color: #5d4f44;
  }
`;

const Square = styled.div`
  width: 353px;
  height: 242px;
  margin-bottom: 30px;

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
        <span> Music Album with METAVERSE</span>
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

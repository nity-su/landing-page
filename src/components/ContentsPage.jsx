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

const HeaderText = styled.span`
  margin-top: 20px;
  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  div {
    height: 15px;
    margin: 10px 10px;
    font-size: 14px;
    font-family: "Inter";
    color: #5d4f44;
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
            ????????? ??????????????? ???????????? ????????? ????????? ?????????????????? ????????? ???
            ????????????.
          </div>
          <div>
            ??????????????? ????????? ????????????????????? ????????? ???????????? ???????????????.
          </div>
          <div>
            ????????? ?????? ???????????? NFT??? ???????????? ??? ??? ????????????. ????????? ??????
            ????????? ????????? ????????????.
          </div>
          <div>
            ???????????? ??????????????? ?????? ????????? ????????? NFT ???????????? ???????????????.
          </div>
        </BodyText>
      </Square>
    </Container>
  );
}

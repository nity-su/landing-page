import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  @media screen and (min-width: 720px) {
  }
`;

const ImageBox = styled.div`
  width: 390px;
  height: 326px;
  background-image: url("https://s3-alpha-sig.figma.com/img/0922/33a6/3c566d5545b7cce08fa09010483a347f?Expires=1668988800&Signature=WLD4qbwIJYbxN59xz4y85Ur1pgwTV8ikNeyHkCon2VQV1WJe~6zGkK1faJOJOoiGLWNp2ovnk8yWVG9ciU8cjYr-ygOelrFHIzhEtOSRta58SPuOCUXfarm~H9LxmJTLX17JgUOIMllvTmr68S8FxpMR5dD4mJzjDtJ-f92XUIyZTGpMAXV9b4n0SKmh5juVFHz6j~xIVs7F4UDbt9XhCnIxB1fssUqppEp7wpPpwivDfcjbX92vYTrA9pdLmDQr46vUf2ij6TQJv~SFdzoaquKcsrBnLD1S-EmxJYvBCb0f05M40iYu2bqH8C9~FX-JlpxtxLf3SAlC145h~bTK5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  background-size: cover;
  background-position: left;
  background-position: top;

  @media screen and (min-width: 720px) {
    width: 640px;
    height: 480px;
  }
`;

const WhatWeDo = styled.div`
  margin: 19px 17px;
  font-family: "Inter";
  font-size: 12px;
  color: #5d4f44;
  @media screen and (min-width: 720px) {
    margin: 28px 34px;
    font-size: 16px;
  }
`;
const TitleText = styled.div`
  margin-top: 120px;
  margin-left: 234px;
  font-family: "Inter";
  font-size: 16px;
  font-weight: bold;
  color: #5d4f44;
  @media screen and (min-width: 720px) {
    margin-top: 180px;
    margin-left: 370px;
    font-size: 26px;
    font-weight: 700;
  }
`;
const SloganText = styled.div`
  margin-top: 125px;
  margin-left: 17px;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 500;
  color: #5d4f44;
  @media screen and (min-width: 720px) {
    margin-top: 180px;
    margin-left: 34px;
    font-size: 16px;
  }
`;

export default function SplinePage() {
  return (
    <Container>
      <ImageBox>
        <WhatWeDo>WE ARE GOING TO MAKE A NEW STYLE MUSIC ALBUM.</WhatWeDo>
        <TitleText>META ALBUM</TitleText>
        <SloganText>YOU HAVE NEVER SEEN BEFORE </SloganText>
      </ImageBox>
    </Container>
  );
}

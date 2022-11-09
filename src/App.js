import styled from "styled-components";
import GlobalStyle from "./GlonalStyle";
import SplinePage from "@components/SplinePage";
import BuyLinkPage from "@components/BuyLinkPage";
import ContentsPage from "@components/ContentsPage";
import QuestionAnswerPage from "@components/QuestionAnswerPage";
import Footer from "./components/Footer";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #1c1817;
`;

const FirstPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: pink;
`;
const SecondPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rebeccapurple;
`;

const ThreePage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: yellowgreen;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <FirstPage />
        <SecondPage />
        <ThreePage />
        <Footer />
      </Container>
    </>
  );
}

export default App;

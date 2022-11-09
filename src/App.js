import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import SplinePage from "@components/SplinePage";
// import BuyLinkPage from "@components/BuyLinkPage";
import ContentsPage from "@components/ContentsPage";
import QuestionAnswerPage from "@components/QuestionAnswerPage";
import TeamMembers from "@components/TeamMembers";
import Footer from "@components/Footer";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #1c1817;
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <SplinePage />
        <ContentsPage />
        <QuestionAnswerPage />
        <Footer />
      </Container>

    </>
  );
}

export default App;

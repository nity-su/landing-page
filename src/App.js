import styled from "styled-components";
import GlobalStyle from "./GlonalStyle";
import SplinePage from "@components/SplinePage";
import BuyLinkPage from "@components/BuyLinkPage";
import ContentsPage from "@components/ContentsPage";
import QuestionAnswerPage from "@components/QuestionAnswerPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <SplinePage />
      <ContentsPage />
      <BuyLinkPage />
      <QuestionAnswerPage />
    </>
  );
}

export default App;

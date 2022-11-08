import styled from "styled-components";
import SplinePage from "./components/SplinePage";
import BuyLinkPage from "@components/BuyLinkPage";
import ContentsPage from "@components/ContentsPage";
import QuestionAnswerPage from "@components/QuestionAnswerPage";

function App() {
  return (
    <div>
      <SplinePage />
      <ContentsPage />
      <BuyLinkPage />
      <QuestionAnswerPage />
    </div>
  );
}

export default App;

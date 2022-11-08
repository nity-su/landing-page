import styled from "styled-components";
import GlobalStyle from "./GlonalStyle";
import SplinePage from "@components/SplinePage";
import BuyLinkPage from "@components/BuyLinkPage";
import ContentsPage from "@components/ContentsPage";
import QuestionAnswerPage from "@components/QuestionAnswerPage";

<<<<<<< HEAD
=======
import GlobalStyle from "./GlobalStyle";
import Footer from "./components/Footer";

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
>>>>>>> aca319f
function App() {
  return (
    <>
      <GlobalStyle />
<<<<<<< HEAD
      <SplinePage />
      <ContentsPage />
      <BuyLinkPage />
      <QuestionAnswerPage />
=======
      <div>
        <FirstPage />
        <SecondPage />
        <ThreePage />
        <Footer />
      </div>
>>>>>>> aca319f
    </>
  );
}

export default App;

import styled from "styled-components";

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
function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <FirstPage />
        <SecondPage />
        <ThreePage />
        <Footer />
      </div>
    </>
  );
}

export default App;

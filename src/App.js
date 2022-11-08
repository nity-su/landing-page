import styled from "styled-components";

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
    <div>
      <FirstPage />
      <SecondPage />
      <ThreePage />
    </div>
  );
}

export default App;

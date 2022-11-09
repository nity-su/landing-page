import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #fcd111;
  display: flex;
  justify-content: center;
`;

const MemberBox = styled.div`
  width: 100px;
  background-color: white;
  display: flex;
  font-size: 10px;
  color: black;
  justify-content: center;
  align-items: center;
`;

export default function TeamMembsrs() {
  return (
    <Container>
      <MemberBox>Team Members</MemberBox>
    </Container>
  );
}

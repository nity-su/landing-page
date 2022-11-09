import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #ffe262;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemberProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MemberBox = styled.div`
  width: 142px;
  height: 32px;
  background-color: white;
  border-radius: 53px;
  display: flex;
  font-size: 10px;
  color: #2329d6;
  justify-content: center;
  align-items: center;
`;

const MemberIntroduction = styled.div`
  height: 82px;
  width: 222px;
  left: 89px;
  top: 0px;
`;

export default function TeamMembsrs() {
  return (
    <Container>
      <MemberBox>Team Members</MemberBox>,<MemberBox>Team Members</MemberBox>
    </Container>
  );
}

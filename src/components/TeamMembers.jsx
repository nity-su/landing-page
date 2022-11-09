import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 524px;
  background-color: #ffe262;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InsideContainer = styled.div`
  width: 90%;
  height: 500px;
  background-color: green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InsideContainer2 = styled.div`
  width: 30%;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MemberTitle = styled.div`
  width: 142px;
  height: 32px;
  margin-top: 50px;
  background-color: white;
  border-radius: 53px;
  display: flex;
  font-size: 10px;
  color: #2329d6;
  justify-content: center;
  align-items: center;
`;

const MemberProfileBox = styled.div`
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const MemberName = styled.div`
  font-weight: 600;
  margin-left: 200px;
  font-size: 15px;
  color: #5c5227;
`;

const MemberIntroduction = styled.div`
  margin-top: 20px;
  margin-left: 200px;
  font-weight: 700;
  color: #5c5227;
  font-size: 12px;
`;

const Circle = ({ size }) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: size / 2,
    },
  });
};

export default function TeamMembsrs() {
  return (
    <Container>
      <MemberTitle>Team Members</MemberTitle>
      <InsideContainer>
        <InsideContainer2>
          <MemberProfileBox>사진</MemberProfileBox>
          <MemberProfileBox>사진</MemberProfileBox>
          <MemberProfileBox>사진</MemberProfileBox>
          <MemberProfileBox>사진</MemberProfileBox>
        </InsideContainer2>
        <InsideContainer2>
          {" "}
          <MemberProfileBox>
            <MemberName>subin Ahn</MemberName>
            <MemberIntroduction>
              테스트 텍스트 테스트 텍스트{" "}
            </MemberIntroduction>
          </MemberProfileBox>
          <MemberProfileBox>
            <MemberName>dongshin cho</MemberName>
            <MemberIntroduction>
              테스트 텍스트 테스트 텍스트{" "}
            </MemberIntroduction>
          </MemberProfileBox>
          <MemberProfileBox>
            <MemberName>henry Nam</MemberName>
            <MemberIntroduction>
              테스트 텍스트 테스트 텍스트{" "}
            </MemberIntroduction>
          </MemberProfileBox>
          <MemberProfileBox>
            <MemberName>junghyun Nam</MemberName>
            <MemberIntroduction>
              테스트 텍스트 테스트 텍스트{" "}
            </MemberIntroduction>
          </MemberProfileBox>
        </InsideContainer2>
      </InsideContainer>
    </Container>
  );
}

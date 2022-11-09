import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffe262;
`;
const MemberTitle = styled.div`
  width: 142px;
  height: 32px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: whitesmoke;
  span {
    font-family: "Inter";
    font-size: 14px;
    font-weight: 700;
    color: #2329d6;
  }
`;
const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const MemberBox = styled.div`
  margin-bottom: 22px;
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const MemberPicA = styled.div`
  width: 63px;
  height: 63px;
  margin-right: 26px;
  border-radius: 30px;
  background-image: url("https://s3-alpha-sig.figma.com/img/eb04/27a3/b467ad053d5ba2bccdbf27a029b680a7?Expires=1668988800&Signature=d7pZLSO~pzGDTFFhcGhd-6wUaKwIAWEAmbDDhi~eC9vu8X0CuFvmW6kEPJ5f0pErZMJtUQdMJAIaPWwegT-KAVa8qykkIIi4-0jDuXzhXZdSR1KTFjONoYBf0LjJF9KcLTtwgrUPzbvVtKBk~TdjB9pISaaOm-mVEWsc1~5SgON7XHPOZQX0bjyre-3twxwsskjMt8xsrJWlTwYGLg5gcVRLY-YhISg81I2k1Io3KiWH71hfOyoEcKgsddmv1nCo81d-vOxdS~M124eAjFxCG2uXSgkC1o589pzx82Eu2jzPxSEYcYYOazMlnbqjDawLF3s87-cVjPd1CDMKQGaikg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  background-size: cover;
  background-position: top;
  background-color: purple;
`;
const MemberPicB = styled(MemberPicA)`
  background-image: url("https://s3-alpha-sig.figma.com/img/59f0/9bb1/d5c20440e4dd644295a5c845cbe2942f?Expires=1668988800&Signature=NwhKBk9NJ0XuXarfB3WkHgX875Lbo1uf-GidQwDHflNVX9zXO7mN9dNreAHvwaJh6U~BJW-weDY61a356c10E-0x3x0iLJhiIUq9I2C5USowrzeuHpTcVbnw4Rn45thOjb1~hAMXf1Db3SmzmJ5s9WXksLdCtWcbhNaowWA44bamM8AsbsyjmgNXiJ-XgXAvhvGV0A61PlC5UbdNSINqSSHILRlwlh9MFxsE7OKn4mX-s95blh9mZmbBcro-Nsh5uhmBEmk-1rHcJqa5NbEpmp1l1dODZIWAwkGfSyAENYzJaWDpIJuc8zGW0LyGx-bwPGuFktwrHR8HnXumbREPpQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
`;
const MemberPicC = styled(MemberPicA)`
  background-image: url("https://s3-alpha-sig.figma.com/img/aa78/48ce/8a947279e207a560084e689f0c2310c3?Expires=1668988800&Signature=UgYP-YOVLJfbXEwcR1jAzAvgFtCKd66Qce8Noa9HNJeygb4LCzoptCi3fOsrWxnKDkpRy2iaCSKVjoJEctIO3LCJKZ74s~wtNDnasYvEkbqS~ozEN5MbsWATOp7BBAdt3h8-KxYWRRGlH6t2DNeJZ8oz~A4sRwxa4ZsLJjT~XT1U6aDybRbEftTC1rM3mw9JkKCPiNAHDOwewn1GsGWX~~w7kiQCjXKNJa7pe0DKffppPr459cbuYiCw7LdkiUdvZX75Y56X71osBzFYpAZhHobqZ57R2ge5ks56vo2rxxbIyUU5AL1JmU~d7XfXgA7w3yuxdOSPY2HjZk9IZVl~zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
`;
const MemberPicD = styled(MemberPicA)`
  background-image: url("https://s3-alpha-sig.figma.com/img/11ab/2669/63aa2fdb9223da371281d4f3b2f252f9?Expires=1668988800&Signature=GwtULNMIN-ZIV~KBZMNxBZkTsmpV9F2FsiHblJaN7nzlslDDj0e0ojYBduAZ7qvAo-RyUOvCbZQuiyncSFca2qh0xC4wDJgK2on7-z-IVbQ-P0q3YYxI6tdDxqAeNfa9YITI2L2FvhyASOHWyF0SpI0ptOYtWkJ8Waxo7fTCYz6~clGWdTxxwWkwxJGUQmtIBau7ei528MmU2Vj1uovIblE35b8aWq9MYTatmgNY2Zspk7FxDernimqds~a0-SnS8ff-URePd2b32ipXsbXh6FwAOi6I91nfCy0u8pW27hpk7WGX46r6yXTSIyQr7S-AADsY19WGPETimMhkJjU5Rg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
`;
const MemberDescript = styled.div`
  width: 222px;
  height: 82px;
  display: flex;
  flex-direction: column;
`;
const MemberName = styled.div`
  margin-bottom: 7px;
  font-family: "Inter";
  font-size: 15px;
  font-weight: 700;
  color: #5c5227;
`;
const MemberDivideBar = styled.div`
  width: 220px;
  height: 2px;
  margin-bottom: 8px;
  background-color: black;
  opacity: 0.1;
`;
const MemberSays = styled.div`
  font-family: "Inter";
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
  color: #5c5227;
`;

export default function TeamMembsrs() {
  return (
    <Container>
      <MemberTitle>
        <span>TEAM MEMBERS</span>
      </MemberTitle>
      <MembersContainer>
        <MemberBox>
          <MemberPicA></MemberPicA>
          <MemberDescript>
            <MemberName>subin Ahn</MemberName>
            <MemberDivideBar></MemberDivideBar>
            <MemberSays>
              친환경 온라인으로 진행한 UXUI 실무 강의 보충용으로 만들어진 자료
              입니다. 피그마를 처음 사용
            </MemberSays>
          </MemberDescript>
        </MemberBox>
        <MemberBox>
          <MemberPicB></MemberPicB>
          <MemberDescript>
            <MemberName>subin Ahn</MemberName>
            <MemberDivideBar></MemberDivideBar>
            <MemberSays>
              친환경 온라인으로 진행한 UXUI 실무 강의 보충용으로 만들어진 자료
              입니다. 피그마를 처음 사용
            </MemberSays>
          </MemberDescript>
        </MemberBox>{" "}
        <MemberBox>
          <MemberPicC></MemberPicC>
          <MemberDescript>
            <MemberName>subin Ahn</MemberName>
            <MemberDivideBar></MemberDivideBar>
            <MemberSays>
              친환경 온라인으로 진행한 UXUI 실무 강의 보충용으로 만들어진 자료
              입니다. 피그마를 처음 사용
            </MemberSays>
          </MemberDescript>
        </MemberBox>{" "}
        <MemberBox>
          <MemberPicD></MemberPicD>
          <MemberDescript>
            <MemberName>subin Ahn</MemberName>
            <MemberDivideBar></MemberDivideBar>
            <MemberSays>
              친환경 온라인으로 진행한 UXUI 실무 강의 보충용으로 만들어진 자료
              입니다. 피그마를 처음 사용
            </MemberSays>
          </MemberDescript>
        </MemberBox>
      </MembersContainer>
    </Container>
  );
}

import UserInfo from "./UserInfo/UserInfo";
import styled from "styled-components";
import UserProducts from "./UserProducts/UserProducts";
import UserPost from "./UserPost/UserPost";

const Container = styled.main`
  width: 390px;
  margin: 0 auto;
  background-color: #f2f2f2;
`;
function Profile() {
  return (
    <Container>
      <UserInfo />
      <UserProducts />
      <UserPost />
    </Container>
  );
}
export default Profile;

import UserInfo from "./UserInfo/UserInfo";
import styled from "styled-components";
import UserProducts from "./UserProducts/UserProducts";
import UserPost from "./UserPost/UserPost";
import BasicNav from "../../../Components/Navbar/BasicNav";
import TabMenu from "../../../Components/TabMenu";

const Container = styled.main`
  width: 100%;
  margin-top: 48px;
  margin-bottom: 61px;
  background-color: #f2f2f2;
`;
function Profile() {
  return (
    <>
      <BasicNav />
      <Container>
        <UserInfo />
        <UserProducts />
        <UserPost />
      </Container>
      <TabMenu />
    </>
  );
}
export default Profile;

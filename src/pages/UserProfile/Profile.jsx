import UserInfo from "./UserInfo/UserInfo";
import styled from "styled-components";
import UserProducts from "./UserProducts/UserProducts";
import UserPost from "./UserPost/UserPost";
import BasicNav from "../../components/navbar/BasicNav";
import TabMenu from "../../components/TabMenu";
import { useEffect } from "react";
import { getCookie } from "../../cookie";
import { SET_PROFILE } from "../../store/Profile";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_PRODUCT_LIST } from "../../store/ProductList";
import Loader from "../../components/Loader";

function Profile() {
  const dispatch = useDispatch();
  const { accountname } = useParams();
  const token = getCookie("accessToken");
  const {
    profile: { status },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(SET_PROFILE(accountname));
    dispatch(SET_PRODUCT_LIST(accountname));
  }, [accountname, dispatch, token]);

  return (
    <Container>
      <h1 className="ir-hidden">유저 프로필 페이지</h1>
      <BasicNav />
      {status === "fulfilled" ? (
        <ProfileContainer>
          <h2 className="ir-hidden">프로필 정보</h2>
          <UserInfo />
          <UserProducts />
          <UserPost />
        </ProfileContainer>
      ) : (
        <Loader />
      )}
      <TabMenu />
    </Container>
  );
}
export default Profile;

const Container = styled.main``;

const ProfileContainer = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 48px;
  margin-bottom: 61px;
  background-color: #f2f2f2;
`;

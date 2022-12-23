import UserInfo from "./UserInfo/UserInfo";
import styled from "styled-components";
import UserProducts from "./UserProducts/UserProducts";
import UserPost from "./UserPost/UserPost";
import BasicNav from "../../../Components/Navbar/BasicNav";
import TabMenu from "../../../Components/TabMenu";
import { useEffect, useState } from "react";
import { getCookie } from "../../../cookie";
import { SET_PROFILE } from "../../../store/Profile";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../Components/Modal";
import DeleteAlert from "../../../Components/DeleteAlert";

function Profile() {
  const dispatch = useDispatch();
  const [modalInfo, setModalInfo] = useState([]);
  const [subModalData, setSubModalData] = useState({});
  const { accountname } = useParams();
  const token = getCookie("accessToken");
  const { modalData } = useSelector((state) => state);

  useEffect(() => {
    dispatch(SET_PROFILE({ accountname, token }));
  }, []);

  return (
    <>
      <BasicNav setModalInfo={setModalInfo} setSubModalData={setSubModalData} />
      <Container>
        <UserInfo />
        <UserProducts />
        <UserPost setModalInfo={setModalInfo} setSubModalData={setSubModalData} />
      </Container>
      <TabMenu />
      {modalData.isOpen && <Modal modalInfo={modalInfo} />}
      {modalData.subModal.isOpen && <DeleteAlert mainText={subModalData.text} rightText={subModalData.rightText} handleAccept={subModalData.handleFunc} />}
    </>
  );
}
export default Profile;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 48px;
  margin-bottom: 61px;
  background-color: #f2f2f2;
`;

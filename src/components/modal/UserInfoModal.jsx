import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../lib/util/cookie";
import { CLOSE_MAIN_MODAL, CLOSE_ALL_MODAL, OPEN_SUB_MODAL } from "../../store/Modal";
import { SET_PROFILE } from "../../store/Profile";
import { INIT_USERINFO } from "../../store/UserInfo";
import BasicModal from "./BasicModal";
import SubModal from "./SubModal";

function UserInfoModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    userInfo: { accountname },
    modal: {
      sub: { isOpen },
    },
  } = useSelector((state) => state);

  function handleLogout() {
    dispatch(CLOSE_ALL_MODAL());
    dispatch(INIT_USERINFO());
    removeCookie("accessToken");
    navigate("/login");
  }

  const modalInfo = [
    {
      text: "설정 및 개인정보",
      handleFunc: () => {
        dispatch(CLOSE_MAIN_MODAL());
        dispatch(SET_PROFILE({ accountname }));
        window.location.href = `/profile/${accountname}`;
      },
    },
    {
      text: "로그아웃",
      handleFunc: () => {
        dispatch(OPEN_SUB_MODAL({ modalType: "LOGOUT_MODAL" }));
      },
    },
  ];

  return (
    <>
      {isOpen && (
        <SubModal mainText="로그아웃하시겠어요?" rightText="로그아웃" handleAccept={handleLogout} />
      )}
      <BasicModal modalInfo={modalInfo} />
    </>
  );
}
export default UserInfoModal;

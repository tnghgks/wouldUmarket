import { getCookie } from "../../cookie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SET_USERINFO } from "../../store/UserInfo";

function Authentication() {
  const token = getCookie("accessToken");
  const { userInfo } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo.accountname) {
      if (token) {
        dispatch(SET_USERINFO(token));
      } else if (window.location.pathname === "/") {
        return;
      } else if (window.location.pathname !== "/login") {
        alert("로그인하셔야 합니다.");
        window.location.href = "/login";
      }
    }
  });

  return;
}
export default Authentication;

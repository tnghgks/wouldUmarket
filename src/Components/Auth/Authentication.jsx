import { getCookie } from "../../cookie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SET_USERINFO } from "../../store/UserInfo";

function Authentication() {
  const token = getCookie("accessToken");
  const { userInfo } = useSelector((state) => state);
  const dispatch = useDispatch();

  async function getUserData() {
    const response = await fetch("https://mandarin.api.weniv.co.kr/user/myinfo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { user } = await response.json();
    dispatch(
      SET_USERINFO({
        _id: user._id,
        username: user.username,
        accountname: user.accountname,
        image: user.image,
      })
    );
  }

  useEffect(() => {
    if (!userInfo.accountname) {
      if (token) {
        getUserData();
      }
    }
  });

  return;
}
export default Authentication;

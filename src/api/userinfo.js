import { authInstance } from "../api/api";

export default async function userInfo() {
  try {
    const { data } = await authInstance.get("/user/myinfo");
    return data.user;
  } catch (error) {
    console.log(error);
  }
}

import { authInstance } from "./api";

export async function getCheckToken() {
  try {
    const { data } = await authInstance.get("/user/checktoken");
    return data.isValid;
  } catch (error) {
    console.log(error);
  }
}

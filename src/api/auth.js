import { authInstance } from "./api";

export async function login(userData) {
  try {
    const {
      data: { user, message },
    } = await authInstance.post("/user/login", userData);

    return { user, message };
  } catch (error) {
    console.log(error);
  }
}

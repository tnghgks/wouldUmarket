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

export async function emailValidate(userEmail) {
  try {
    const {
      data: { message },
    } = await authInstance.post("/user/emailvalid", userEmail);
    return message;
  } catch (error) {
    console.log(error);
  }
}

export async function accountnameValidate(accountname) {
  try {
    const {
      data: { message },
    } = await authInstance.post("/user/accountnamevalid", accountname);
    return message;
  } catch (error) {
    console.log(error);
  }
}

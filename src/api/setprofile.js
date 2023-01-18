import { authInstance, formDataInstance } from "./api";

export async function SetProfileImg(formData) {
  try {
    const { data } = await formDataInstance.post("/image/uploadfile", formData);
    return data.filename;
  } catch (error) {
    console.log(error);
  }
}

export async function IdValidation(accountnameValue) {
  console.log(accountnameValue);
  try {
    const { data } = await authInstance.post("/user/accountnamevalid", {
      user: {
        accountname: accountnameValue,
      },
    });
    return data.message;
  } catch (error) {
    console.log(error);
  }
}

export async function RegisteredData(inputData) {
  try {
    const { data } = await authInstance.post("/user", inputData);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function GetLogin(email, password) {
  try {
    const { data } = await authInstance.post("/user/login", {
      user: {
        email,
        password,
      },
    });
    return data.user;
  } catch (error) {
    console.log(error);
  }
}

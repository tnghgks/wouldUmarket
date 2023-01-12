import { formDataInstance } from "./api";

export async function uploadImage(formData) {
  try {
    const { data: imgData } = await formDataInstance.post(`/image/uploadfile`, formData);

    if (!imgData) return { isSuccess: false };

    return { isSuccess: true, imgData };
  } catch (error) {
    console.log(error);
  }
}

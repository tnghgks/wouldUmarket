import { authInstance } from "./api";

export async function PostDelete(postItemId) {
  try {
    const { data } = await authInstance.delete(`/post/${postItemId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function PostReport(postItemId) {
  try {
    const { data } = await authInstance.post(`/post/${postItemId}/report`);
    return data.report;
  } catch (error) {
    console.log(error);
  }
}

export async function ClickHeart(postDataId) {
  try {
    const { data } = await authInstance.post(`/post/${postDataId}/heart`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function ClickUnHeart(postDataId) {
  try {
    const { data } = await authInstance.delete(`/post/${postDataId}/unheart`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

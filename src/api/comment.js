import { authInstance } from "./api";

export default async function AddComment({ postId, value }) {
  try {
    const { data } = await authInstance.post(`/post/${postId}/comments`, {
      comment: {
        content: value,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

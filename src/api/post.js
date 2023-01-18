import { authInstance } from "./api";
import { defaultInstance } from "./api";

export async function getPostData({ id }) {
  try {
    const {
      data: { post },
    } = await authInstance.get(`/post/${id}`);

    return post;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostCommentsData({ id }) {
  try {
    const {
      data: { comments },
    } = await authInstance.get(`/post/${id}/comments`);

    return comments;
  } catch (error) {
    console.log(error);
  }
}

export async function getFollowersPosts({ pageNum = 1 }) {
  try {
    const {
      data: { posts },
    } = await authInstance.get(`/post/feed/?limit=${pageNum * 5}`);

    return posts;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsByAccountName({ accountname, pageNum = 1 }) {
  try {
    const {
      data: { post },
    } = await authInstance.get(
      `post/${accountname}/userpost/?limit=${pageNum * 5}`
    );

    return post;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadPostImage(formData) {
  try {
    const { data: imgData } = await defaultInstance.post(
      `/image/uploadfiles`,
      formData
    );

    return imgData;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadPost({ postData }) {
  try {
    const {
      data: { post },
    } = await authInstance.post(`/post`, postData);
    return post;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteComment({ id, comment }) {
  try {
    const { data } = await authInstance.delete(
      `/post/${id}/comments/${comment.id}`
    );

    alert(data.message);

    if (!data) return false;
    return true;
  } catch (error) {
    console.log(error);
  }
}

export async function reportComment({ id, comment }) {
  try {
    const {
      data: { report },
    } = await authInstance.post(`/post/${id}/comments/${comment.id}/report`);
    return report;
  } catch (error) {
    console.log(error);
  }
}

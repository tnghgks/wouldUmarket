import { authInstance } from "./api";

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
    } = await authInstance.get(`post/${accountname}/userpost/?limit=${pageNum * 5}`);

    return post;
  } catch (error) {
    console.log(error);
  }
}

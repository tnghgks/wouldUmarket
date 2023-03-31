import { authInstance } from "./api";

export async function getUserProfile(accountname) {
  try {
    const {
      data: { profile },
    } = await authInstance.get(`/profile/${accountname}`);
    if (!profile) return { isSuccess: false };
    return { isSuccess: true, profile };
  } catch (error) {
    console.log(error);
  }
}

export async function getFollowers({ accountname, pageNum }) {
  try {
    const { data: followerData } = await authInstance.get(
      `/profile/${accountname}/follower?limit=${pageNum * 20}`
    );
    return followerData;
  } catch (error) {
    console.log(error);
  }
}
export async function getFollowings({ accountname, pageNum }) {
  try {
    const { data: followingData } = await authInstance.get(
      `/profile/${accountname}/following?limit=${pageNum * 20}`
    );
    return followingData;
  } catch (error) {
    console.log(error);
  }
}
export async function follow(accountname) {
  try {
    const {
      data: { profile, message },
    } = await authInstance.post(`/profile/${accountname}/follow`);
    if (!profile) {
      alert(message);
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
}

export async function unFollow(accountname) {
  try {
    const {
      data: { profile, message },
    } = await authInstance.delete(`/profile/${accountname}/unfollow`);
    if (!profile) {
      alert(message);
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
}

export async function modifyProfile({ editUserData }) {
  try {
    const { data: user } = await authInstance.put("/user", editUserData);

    return user;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}

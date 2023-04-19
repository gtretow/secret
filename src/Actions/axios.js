import axios from "axios";

export async function getUserPosts(userId) {
  let response;
  try {
    response = await axios.get("https://dev.codeleap.co.uk/careers/");
  } catch (e) {
    console.error("an error ocurred", e);
  }
  const userPosts = response.data.results.filter(
    (item) => item.username.toLowerCase() == userId.toLowerCase()
  );
  return userPosts;
}

export async function createPost(payload) {
  let response;
  try {
    response = await axios.post("https://dev.codeleap.co.uk/careers/", payload);
  } catch (e) {
    console.error("an error ocurred", e);
  }
  return response.data;
}

export async function editPost(itemId, payload) {
  try {
    await axios.patch(`https://dev.codeleap.co.uk/careers/${itemId}/`, payload);
  } catch (e) {
    console.error("an error ocurred", e);
  }
  return;
}

export async function deletePost(itemId) {
  try {
    await axios.delete(`https://dev.codeleap.co.uk/careers/${itemId}/`);
  } catch (e) {
    console.error("an error ocurred", e);
  }
  return;
}

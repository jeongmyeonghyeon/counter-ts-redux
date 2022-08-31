import axios from "axios";

const fetchPosts = (): any => {
  return async function fetchPostsThunk(dispatch: any, getState: any) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("response.data", response.data);
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export { fetchPosts };

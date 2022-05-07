import axios from "axios";

export async function getAllPostsData() {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`
  );

  const posts = await res.data;
  const filteredPosts = posts.reverse();

  return filteredPosts;
}

export async function getAllPostIds() {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`
  );

  const posts = await res.data;

  return posts.map((post: any) => {
    return { params: { id: String(post.id) } };
  });
}

export async function getPostData(id: string) {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-post/${id}`
  );

  const post = await res.data;

  return post;
}

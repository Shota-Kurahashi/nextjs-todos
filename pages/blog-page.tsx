import Link from "next/link";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts";

const BlogPage = ({ filteredPosts }: any) => {
  return (
    <Layout title="Blog Page">
      <ul>
        {filteredPosts &&
          filteredPosts.map((post: any) => (
            <Post key={post.id} post={post}></Post>
          ))}
      </ul>
      <Link href="/main-page" passHref>
        <div className="mt-12 flex cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3 h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
};

export async function getStaticProps() {
  const filteredPosts = await getAllPostsData();

  return { props: { filteredPosts }, revalidate: 3 };
}

export default BlogPage;

import Link from "next/link";
import React from "react";

const Post = ({ post }: any) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`} passHref>
        <span className="cursor-pointer border-b border-gray-500 text-white hover:bg-gray-600">
          {post.title}
        </span>
      </Link>
    </div>
  );
};

export default Post;

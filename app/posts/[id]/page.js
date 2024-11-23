import Comments from "@/app/component/Comments";
import getAllPosts from "@/lib/getAllPosts";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);
  return {
    title: post.title,
    description: "This is single Post's description",
  };
}

export default async function Post({ params }) {
  const { id } = params;
  const mypost = getPost(id);
  const mycomments = getPostComments(id);
  // const [post, comments] = await Promise.all([mypost, mycomments])
  const post = await getPost(id);



  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold pb-2">{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <Suspense fallback={<h3>🌀 Loading...</h3>}>
        <Comments promise={mycomments} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const postsTest = await getAllPosts();
  const onlyid = await postsTest;
  return onlyid.map((post) => {
    return {
      id: post.id.toString()
    }
  }) 
}

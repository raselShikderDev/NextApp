import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link'
import React from 'react'

export function generateMetadata() {
  return {
    title:"Posts"
  }
}

export default async function Posts() {
  
  const allPost = await getAllPosts()
  // console.log(allPost)
  return (
    <div className='mt-10'>
      <h1 className='text-2xl font-bold'>All Posts - cheak it out </h1>
      <ul className='space-y-1'>
        {
          allPost.map((post) => {
            return <li key={post.id}><Link className='text-slate-300' href={`/posts/${post.id}`}>{ post.title}</Link></li>
          })
        }
      </ul>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'

export default function AllBlogs() {
  
  const myBlogs = [
    {
      id: 1,
      title: "Blog Title 01",
      description: "Blog Description Number 01"
    },
    {
      id: 2,
      title: "Blog Title 02",
      description: "Blog Description Number 02"
    },
  ]
  
  return (
    <div className='space-y-6'>
      <h1 className='mb-3'>Blogs Page</h1>
      <ul className='gap-1 flex flex-col'>
        {
          myBlogs.map((blog) => {
            return <Link href={`blog/${blog.id}`} key={blog.id}>{blog.title}</Link>
          })
        }
        
      </ul>
    </div>
  )
}

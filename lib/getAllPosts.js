import React from 'react'

export default async function getAllPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    next: {
      revalidate: 30,
    }
  })
  if (!res.ok) {
    throw new Error("Fetch Data Request is faild")
  }
  return res.json()
}

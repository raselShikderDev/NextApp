

export default async function getPostComments(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  if (!res.ok) {
    throw new Error("Opps! Fetch comments is faild")
  }
  return res.json()
}



export default async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) {
    throw new Error("Your Requested Post faild to fetch")
  }

  return res.json()
}

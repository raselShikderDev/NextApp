import { notFound } from "next/navigation"


export default function Blog({params}) {
  const { id } = params

  if (id >= 3) {
    return notFound()
  }

  return (
    <div>
      <p>This is Blog: { id}</p>
    </div>
  )
}

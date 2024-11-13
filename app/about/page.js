
import Link from "next/link";

export default function About() {
  // throw new Error("Huge Error Found")
  return (
    <main className="my-10 space-y-5">
      <p>About page</p>
      <Link className="bg-green-500 px-4 py-1 rounded shadow-md" href={"/about/info"}>Go to Enfo</Link>
    </main>
  )
}
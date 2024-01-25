import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen  items-center justify-between p-24">
    <h1>This is home page</h1>
    <Link href="/about"><button className="btn btn-primary">Go to About</button></Link>
    <Link href="/counter"><button className="btn btn-accent">Go to counter</button></Link>
    </main>
  )
}

import Link from "next/link"
import { MainLayout } from '../components/MainLayout'

export default function Home() {
  return (
    <MainLayout title={"Home Page"}>


      <h1>H1 tag</h1>
      <Link href="/about"><a>About</a></Link>
      <Link href="/posts"><a>Posts</a></Link>
    </MainLayout>
  )
}

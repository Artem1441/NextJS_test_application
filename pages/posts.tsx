import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import { IPost } from "../interfaces/post";

interface PostsPageProps {
    posts: IPost[]
}

// if the server is fast
export default function Posts({ posts }: PostsPageProps) {

    return (
        <MainLayout title={"Posts Page"}>
            <h1>Posts Page</h1>
            <ul>
                {posts.map((post) => <li key={post.id}>
                    <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>)}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/posts`)
    const posts: IPost[] = await res.json()

    return {
        posts
    }
}
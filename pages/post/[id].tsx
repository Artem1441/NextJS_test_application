import { NextPageContext } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { MainLayout } from "../../components/MainLayout"
import { IPost } from "../../interfaces/post"

interface PostPageProps {
    post: IPost
}

// if the server is slow
export default function Post({ post: serverPost }: PostPageProps) {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const res = await fetch(`${process.env.BASE_URL}/api/posts/${router.query.id}`)
            const data = await res.json()
            setPost(data)
        }

        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return (
            <MainLayout title={"Loading..."}>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
        <div>
            <h1>Title: {post.title}</h1>
            <p>{post.body}</p>
            <Link href={"/posts"}><a>Back to all posts</a></Link>
        </div>
    )
}

// for combine frontend and backend
// it works on server and client. it's a good decision for lazyload
Post.getInitialProps = async ({ query, req }: NextPageContext) => {
    if (!req) {
        return {
            post: null
        }
    }
    const res = await fetch(`${process.env.BASE_URL}/api/posts/${query.id}`)
    const post: IPost = await res.json()

    return {
        post
    }
}

// for advanced queries to backend
// it works only on server. it's a bad decision for lazyload
// export async function getServerSideProps({ query }) {
//     const res = await fetch(`${process.env.BASE_URL}/api/posts/${query.id}`)
//     const post = await res.json()

//     return {
//         props: {
//             post
//         }
//     }
// }
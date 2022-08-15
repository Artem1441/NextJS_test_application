import Head from "next/head";
import Link from "next/link";

export function MainLayout({ children, title }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Use Next JS if you want to have good seo and fast website" />
                <meta name="keywords" content="NextJS, React, JavaScript" />
                <meta name="author" content="Artem Kozlov" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>{title}</title>
            </Head>
            <nav>
                <Link href={"/"}><a>Home</a></Link>
                <Link href={"/about"}><a>About</a></Link>
                <Link href={"/posts"}><a>Posts</a></Link>
            </nav>

            <main>
                {children}
            </main>
        </>
    )
}


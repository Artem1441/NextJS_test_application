import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import styles from "../styles/error.module.scss"

export default function ErrorPage() {
    return (
        <MainLayout>
            <Head>
                <title>Error</title>
            </Head>
            <h1 className={styles.error}>Error 404</h1>
            <p>Please <Link href={"/"}><a>GO BACK</a></Link> to safety</p>
        </MainLayout>
    )
}
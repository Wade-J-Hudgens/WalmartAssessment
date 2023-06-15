import Image from 'next/image'
import {ImageFeed} from './components/image-feed'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={
            styles.main
        }>
            <ImageFeed/>
        </main>
    )
}

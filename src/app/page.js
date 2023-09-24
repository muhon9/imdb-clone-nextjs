import Image from 'next/image'
import styles from './page.module.scss'
import Nav from '@/components/Nav/Nav'

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <div>Hello world</div>
    </main>
  )
}

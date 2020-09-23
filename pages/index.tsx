import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Content } from '../components/Content'

import style from './style.module.scss'

export default function Home() {
  return (
    <div className={style.home}>
      <Head>
        <title>caohuilin's HomePage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.container}>
        <Navbar />
        <Content />
      </div>
    </div>
  )
}

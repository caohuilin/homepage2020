import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Content } from "../components/Content";

import style from "./style.module.scss";

export default function Home() {
  return (
    <div className={style.home}>
      <Head>
        <title>caohuilin's HomePage</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <div className={style.container}>
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

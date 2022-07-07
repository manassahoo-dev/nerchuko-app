import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-9xl text-center font-bold pt-5">Nerchuko</h1>
      </main>
    </div>
  );
}

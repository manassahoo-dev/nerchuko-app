import Head from "next/head";
import React from "react";
import { Button } from "../components/atoms/Button";
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
        &nbsp;<Button label="Manas Sahoo"></Button>
      </main>
    </div>
  );
}

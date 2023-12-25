import Head from "next/head";
import styles from "../styles/Home.module.css";
import Page from "./components/page";

export default function About() {
  return (
    <div className="root">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <main>
          <p>Hello this is a text about us</p>
        </main>
      </Page>
    </div>
  );
}

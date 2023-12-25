import Head from "next/head";
import styles from "../styles/Home.module.css";
import Page from "./components/page";

export default function Home() {
  return (
    <div className="root">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <main>
          <p>This is the home Page</p>
          <p>blabla</p>
        </main>

        <footer>
          <p>testtesttest</p>
        </footer>
      </Page>
    </div>
  );
}

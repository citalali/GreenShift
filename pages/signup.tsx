import Head from "next/head";
import Page from "./components/Page";
import styles from "../styles/SignUp.module.css";

export default function SignUp() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Sign Up Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <main className={styles.signup}>
          <h2>Sign Up Form</h2>
          <form className={styles.form}>
            <label htmlFor="name" className={styles.label}>
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className={styles.input}
            />

            <label htmlFor="email" className={styles.label}>
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className={styles.input}
            />

            <label htmlFor="businessName" className={styles.label}>
              Business Name:
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter your business name"
              required
              className={styles.input}
            />

            <label htmlFor="category" className={styles.label}>
              Business Category:
            </label>
            <select id="category" name="category" className={styles.select}>
              <option value="art">Art</option>
              <option value="music">Music</option>
              <option value="food">Food</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="description" className={styles.label}>
              Tell us about your business:
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe your business..."
              required
              className={styles.textarea}
            ></textarea>

            <label htmlFor="website" className={styles.label}>
              Business Website:
            </label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="Enter your website URL"
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </main>
      </Page>
    </div>
  );
}

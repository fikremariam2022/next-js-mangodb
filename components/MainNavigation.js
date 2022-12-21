import headerCss from "../styles/header.module.css";
import Head from "next/head";
import Link from "next/link";
const HomePage = () => {
  return (
    <>
      <Head title="Meetup List"></Head>
      <header className={headerCss.header}>
        <div className={headerCss.logo}>
          <Link href="/">React Meetup News</Link>
        </div>

        <nav className={headerCss.headerRight}>
          <ul>
            <li>
              <Link href="/">All Meetups</Link>
            </li>
            <li>
              <Link href="/new-meetup">New Meetups</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default HomePage;

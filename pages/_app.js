import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {"This _app.js is awesome "}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

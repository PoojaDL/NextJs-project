import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  console.log("Myapp executing");
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

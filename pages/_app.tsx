import React from "react";
import Layout from "components/Layout";
import { SWRConfig } from "swr";
import fetcher from "lib/fetcher";
import "../styles.css";

function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default App;

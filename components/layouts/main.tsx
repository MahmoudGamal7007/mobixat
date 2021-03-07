import { useEffect } from "react";
import Footer from "../partials/footer";
import Navbar from "../partials/navbar";
import Head from "next/head";
export default function Main({ children }) {
  useEffect(() => {
    try {
      document.getElementById("Loader").style.height = "0px";
    } catch (ex) {
      console.error(ex);
    }
  });
  return (
    <>
      <Head key={12}>
        <link
          rel="shortcut icon"
          href="/images/logos/mobixat-8/mobixat.ico"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

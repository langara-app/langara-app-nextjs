// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import "./_app.css";
import "../styles/globals.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from "next/head";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <MenuBar />
      {/* <Component {...pageProps} />
      <Footer /> */}
    </>
  );
}

export default MyApp;

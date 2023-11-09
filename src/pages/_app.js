// import styles
import "../styles/globals.css";

// import library styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import components
import Head from "next/head";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
import Cursor from "../components/ReusableElements/Cursor";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Cursor />
      <MenuBar />
      {/* <Component {...pageProps} />
      <Footer /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

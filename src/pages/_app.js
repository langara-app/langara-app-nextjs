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
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      {/* <Cursor /> */}
      <AnimatedCursor
        innerSize={15}
        outerSize={25}
        color="194, 60, 10"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2.5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          "link",
          ".cursor-animate",
          ".react-player__preview",
          ".filter-select-option",
          ".slick-arrow",
          ".MuiButtonBase-root",
          "#wmdd_program_questions",
          "#enrolled_wmdd",
          "#post_wmdd_questions",
          "#international_applicants",
          "#covid",
        ]}
      />
      <MenuBar />
      {/* <Component {...pageProps} />
      <Footer /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

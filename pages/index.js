import Head from "next/head";
import styles from "../styles/home/home.module.scss";
import Link from "next/link";
import fetch from "node-fetch";

import Alumni from "../components/Alumni";
import Work from "../components/Work";

export async function getStaticProps() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  //   const data = getHomeData();

  const res = await fetch(
    "https://api.langara-app.ca/wp-json/acf/v3/pages/356"
  );
  const data = await res.json();

  const alumniData = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/alumni"
  );
  const alumni = await alumniData.json();

  const workData = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/projects?per_page=100"
  );
  const work = await workData.json();

  return { props: { data, alumni, work } };
}

const Home = ({ data, alumni, work }) => {
  return (
    <>
      <Head>
        <title>Home Page </title>
      </Head>
      <div className="front-page">
        <div className="intro">
          <div className="intro-desc">
            <h1>{data.acf.title_intro}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: data.acf.description_intro,
              }}
            ></p>
            <Link className="button" href="/posts">
              {data.acf.link_text_front_top}
            </Link>
          </div>
        </div>

        <div>
          <div className="intro-movie-wrap">
            {/* <img src={background} alt="hp-bg" /> */}
            <div className="intro-movie">
              <iframe src={data.acf.intro_movie} title="intro-movie"></iframe>
            </div>
          </div>

          {/* <StudentWorkTopIntro {...cf} />

            <AlumniSuccess /> */}
          <Work data={work} />
          <Alumni data={alumni} />

          <div
            className="top-apply bcg-img"
            style={{ background: `url(${data.acf.apply_now_image})` }}
          >
            <h1>{data.acf.bottom_message_title}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: data.acf.bottom_message,
              }}
            ></p>
            <h2>
              <a
                href={data.acf.apply_now_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.acf.apply_now_button}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

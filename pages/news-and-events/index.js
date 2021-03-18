import React from "react";
import styles from '../../styles/NewsEvents.module.css';
import Footer from "../../components/Footer";
import { HomeData } from "../../lib/HomeData";
import JoinWMDD from '../../components/JoinWMDD';
import Link from "next/link";
import fetch from "node-fetch";

export async function getStaticProps() {
  // fetch post data from an external API endpoint
  const res = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/news-and-events"
  )

  const news_events = await res.json();

  const homeData = await HomeData;
  // console.log("home data", homeData)
  
  return { props: { news_events, homeData } };
}

const NewsEvents = ({ news_events, homeData }) => {
  const formatDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
     return news_events.map(news => {
      console.log(news.date)
      return new Date(news.date).toLocaleDateString(undefined, options);
    })
   
  };
  return (
    <div className={styles.news_body}>
      <h1>News & Events Details</h1>
      {
      news_events.map(news => (
        <div className={styles.events_content}>
          <div>
            <img className={styles.events_image} src={news.acf.article_image}/>
          </div>
          <div>
            {/* <p>{news.date}</p> */}
            <span className="post-date">{formatDate()}</span>
              <Link href={`/news-and-events/${encodeURIComponent(news.slug)}`}>
              <a><h2>{news.title.rendered}</h2></a>
              </Link>
              <p className="article1"
                  dangerouslySetInnerHTML={{
                    __html: news.acf.section1_article,
                  }}>
              </p>
          </div>
      </div>
      ))
      }
      <JoinWMDD />
      <Footer />
    </div>
  );
};

export default NewsEvents;

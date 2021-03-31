import React from "react";
import styles from "../../styles/NewsEvents.module.css";
import AdminBox from "../../components/AdminBox";
import Image from "next/image";
import Link from "next/link";
// import fetch from "node-fetch";

export async function getStaticProps() {
  // fetch post data from an external API endpoint
  const res = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/news-and-events"
  );

  const news_events = await res.json();

  return { props: { news_events } };
}

const NewsEvents = ({ news_events }) => {
  return (
    <div>
      <div className={styles.news_body}>
        <h1>News & Events Details</h1>
        {news_events.map((news) => (
          <div key={news} className={styles.events_content}>
            <div>
              <Image
                src={news.acf.article_image}
                alt="Capstone Showcase Banner"
                width={600}
                height={300}
              />
            </div>
            <div>
              <span>
                {new Date(news.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <h2 className={styles.title}>{news.title.rendered}</h2>
              <p
                className="excerpt"
                dangerouslySetInnerHTML={{
                  __html: news.acf.excerpt,
                }}
              ></p>
              <Link href={`/news-and-events/${news.slug}`}>
                <a>
                  <div>read more</div>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <AdminBox />
    </div>
  );
};

export default NewsEvents;

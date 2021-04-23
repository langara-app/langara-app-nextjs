import Image from 'next/image';
import styles from "../../styles/NewsEvents.module.css";

const NewsEventsInvidivual = ({ event }) => {  
  return (
    <article>
      <div className="news-and-events-single">
        <div>
          <div className={styles.event_image_single}>
            <Image 
              src={event.acf.article_image}
              alt="Capstone Showcase Banner"
              width={1200}
              height={600}/>
          </div>
          <div className={styles.news_events_single_content}>
            <div className={styles.single_content}>
          {event.acf.section1_title !== "" ? (
            <h3 className={styles.article1_title}>{event.acf.section1_title}</h3>
          ) : null}
          {event.acf.section1_article !== "" ? (
            <p
              className="article1"
              dangerouslySetInnerHTML={{
                __html: event.acf.section1_article,
              }}
            ></p>
          ) : null}
          {event.acf.section1_link !== "" ? (
            <a className="article1-link" href={event.acf.section1_link}>
              {event.acf.section1_link_title}
            </a>
          ) : null}
          {event.acf.section2_title !== "" ? (
            <h3 className="article2-title">{event.acf.section2_title}</h3>
          ) : null}
          {event.acf.section2_article !== "" ? (
            <p
              className="article2"
              dangerouslySetInnerHTML={{
                __html: event.acf.section2_article,
              }}
            ></p>
          ) : null}
          {event.acf.section2_link !== "" ? (
            <a className="article2-link" href={event.acf.section2_link}>
              {event.acf.section1_link_title}
            </a>
          ) : null}
          {event.acf.section3_title !== "" ? (
            <h3 className="article1-title">{event.acf.section3_title}</h3>
          ) : null}
          {event.acf.section3_article !== "" ? (
            <p
              className="article3"
              dangerouslySetInnerHTML={{
                __html: event.acf.section3_article,
              }}
            ></p>
          ) : null}
          {event.acf.section3_link !== "" ? (
            <a className="article1-link" href={event.acf.section3_link}>
              {event.acf.section3_link_title}
            </a>
          ) : null}
          {event.acf.section4_title !== "" ? (
            <h3 className={styles.article4_title}>{event.acf.section4_title}</h3>
          ) : null}
          {event.acf.section4_article !== "" ? (
            <p
              className={styles.article4}
              dangerouslySetInnerHTML={{
                __html: event.acf.section4_article,
              }}
            ></p>
          ) : null}
          {event.acf.section4_link !== "" ? (
            <a className="article1-link" href={event.acf.section4_link}>
              {event.acf.section4_link_title}
            </a>
          ) : null}
           </div>
          </div>
        </div>
      </div>
  </article>
  )
};
export default NewsEventsInvidivual;

export async function getStaticPaths() {
  const res = await fetch("https://api.langara-app.ca/wp-json/wp/v2/news-and-events")
  const news_events = await res.json();

  return {
    paths: news_events.map((event) => ({ params: { slug: event.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://api.langara-app.ca/wp-json/wp/v2/news-and-events")
  const news_events = await res.json();
  
  return {
    props: {
      event: news_events.find((event) => event.slug === params.slug),
    },
  };
}


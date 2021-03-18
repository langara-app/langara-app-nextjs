import React from "react";
import Footer from "../../components/Footer";
import Link from "next/link";

export async function getServerSideProps(context) {
    const res = await fetch(
        "https://api.langara-app.ca/wp-json/wp/v2/news-and-events"
        // "https://api.langara-app.ca/wp-json/acf/v3/news-and-events"
      )
    
      const news_events = await res.json();
      
      return { props: { news_events } };
}

const NewsEventsIndividual = ({ news_events }) => {
  const formatDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
     return news_events.map(news => {
      console.log(news.date)
      return new Date(news.date).toLocaleDateString(undefined, options);
    })
   
  };
    return (
        <div className="news-and-events-single">
        <h1>News & Events Details</h1>
        {
        news_events.map(news => (        
        <div className="news-event-single">
          <h2>{news.title.rendered}</h2>
          <span className="post-date">{formatDate()}</span>
          <div>
            <img src={news.acf.article_image} alt="news-img" />
          </div>
          {news.acf.section1_title !== "" ? (
            <h3 className="article1-title">{news.acf.section1_title}</h3>
          ) : null}
          {news.acf.section1_article !== "" ? (
            <p
              className="article1"
              dangerouslySetInnerHTML={{
                __html: news.acf.section1_article,
              }}
            ></p>
          ) : null}
          {news.acf.section1_link !== "" ? (
            <a className="article1-link" href={news.acf.section1_link}>
              {news.acf.section1_link_title}
            </a>
          ) : null}
          {news.acf.section2_title !== "" ? (
            <h3 className="article2-title">{news.acf.section2_title}</h3>
          ) : null}
          {news.acf.section2_article !== "" ? (
            <p
              className="article2"
              dangerouslySetInnerHTML={{
                __html: news.acf.section2_article,
              }}
            ></p>
          ) : null}
          {news.acf.section2_link !== "" ? (
            <a className="article2-link" href={news.acf.section2_link}>
              {news.acf.section1_link_title}
            </a>
          ) : null}
          {news.acf.section3_title !== "" ? (
            <h3 className="article1-title">{news.acf.section3_title}</h3>
          ) : null}
          {news.acf.section3_article !== "" ? (
            <p
              className="article3"
              dangerouslySetInnerHTML={{
                __html: news.acf.section3_article,
              }}
            ></p>
          ) : null}
          {news.acf.section3_link !== "" ? (
            <a className="article1-link" href={news.acf.section3_link}>
              {news.acf.section3_link_title}
            </a>
          ) : null}
          {news.acf.section4_title !== "" ? (
            <h3 className="article1-title">{news.acf.section4_title}</h3>
          ) : null}
          {news.acf.section4_article !== "" ? (
            <p
              className="article4"
              dangerouslySetInnerHTML={{
                __html: news.acf.section4_article,
              }}
            ></p>
          ) : null}
          {news.acf.section4_link !== "" ? (
            <a className="article1-link" href={news.acf.section4_link}>
              {news.acf.section4_link_title}
            </a>
          ) : null}
        </div>
        ))
  }
        <Footer />
      </div>
    );
  };
  
  export default NewsEventsIndividual;
  
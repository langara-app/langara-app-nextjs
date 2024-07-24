// components/Meta.js
import Head from "next/head";

const Meta = ({
  pageTitle,
  title,
  description,
  url,
  type,
  keywords,
  image,
}) => {
  return (
    <Head>
      {pageTitle && <title>{pageTitle}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph Meta Tags */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      {type && <meta property="og:type" content={type} />}

      {/* Twitter Card Meta Tags */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
};

export default Meta;

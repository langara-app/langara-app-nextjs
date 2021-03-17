import React from "react";
import Footer from "../../components/Footer";
import HeaderImageBox from "../../components/HeaderImageBox";
import AdminBox from "../../components/AdminBox";
import { AlumniPageData } from "../../lib/AlumniPageData";
import AlumniSingle from "../../components/Alumni/AlumniSingle";

export async function getStaticProps() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  //   const data = getHomeData();

  const alumniData = await fetch(
    "https://api.langara-app.ca/wp-json/acf/v3/alumni"
  );
  const alumni = await alumniData.json();

  return { props: { alumni } };
}

const Alumni = ({ alumni }) => {
  return (
    <div>
      <HeaderImageBox
        title={AlumniPageData.title}
        desc={AlumniPageData.description}
      />
      {alumni.map((alumna) => (
        <AlumniSingle data={alumna.acf} />
      ))}
      <AdminBox />

      <Footer />
    </div>
  );
};

export default Alumni;

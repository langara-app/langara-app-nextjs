import React from "react";
import OtherHeader from "../../components/Header/OtherHeader";
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
      <OtherHeader
        title={AlumniPageData.title}
        desc={AlumniPageData.description}
      />
      {alumni.map((alumna) => (
        <AlumniSingle data={alumna.acf} />
      ))}
      <AdminBox />
    </div>
  );
};

export default Alumni;

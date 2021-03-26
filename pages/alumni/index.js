import React from "react";
import OtherHeader from "../../components/Header/OtherHeader";
import AdminBox from "../../components/AdminBox";
import { AlumniPageData } from "../../lib/AlumniPageData";
import AlumniSingle from "../../components/Alumni/AlumniSingle";
import useWindowWidth from "../../components/Hooks/useWindowWidth";

import styles from "../../styles/AlumniIndex.module.css";

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
  const width = useWindowWidth();
  console.log(alumni);
  return width < 768 ? (
    <div>
      <OtherHeader
        title={AlumniPageData.title}
        desc={AlumniPageData.description}
        page={"alumni"}
      />
      {alumni.map((alumna) => (
        <AlumniSingle data={alumna.acf} />
      ))}
      <AdminBox />
    </div>
  ) : (
    <div>
      <OtherHeader
        title={AlumniPageData.title}
        desc={AlumniPageData.description}
        page={"alumni"}
      />
      <div className={styles.listContainer}>
        <div>
          {alumni.map((alumna, index) =>
            index % 2 === 0 ? (
              <AlumniSingle
                data={alumna.acf}
                length={alumni.length}
                index={index + 1}
              />
            ) : null
          )}
        </div>
        <div style={{ marginTop: "17.5vw" }}>
          {alumni.map((alumna, index) =>
            index % 2 === 1 ? (
              <AlumniSingle
                data={alumna.acf}
                index={"even"}
                length={alumni.length}
                index={index + 1}
              />
            ) : null
          )}
        </div>
      </div>
      <AdminBox />
    </div>
  );
};

export default Alumni;

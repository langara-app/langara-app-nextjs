import React from "react";
import { WmddData }from '../../lib/WmddData';
import TitleBox from '../../components/TitleBox';
import styles from '../../styles/WMDD.module.css';
import AdminBox from '../../components/AdminBox';

const AboutUs = () => {

  const curriculumInfo = WmddData.curriculum;

  const curriculumDetails = curriculumInfo.map(curriculum => 
    
      <div>
        <img src={curriculum.image} alt="PLACEHOLDER FOR NOW" 
          style={{width: 50, height: 50}}/>
        <p>{curriculum.description}</p>
      </div>
    
  )

  const developerInfo = WmddData.developer_details;
  const developerDetails = developerInfo.map(detail => 
      <div>
      <img src={detail.image} style={{width: 100, height: 100}}/>
        <p>{detail.title}</p>
      </div>
  )

  const designerInfo = WmddData.designer_details;
  const designerDetails = designerInfo.map(detail => 
      <div>
        <img src={detail.image} style={{width: 100, height: 100}}/>
        <p>{detail.title}</p>
      </div>
  )

  return (
    <div className={styles.wmdd_body}>
      <TitleBox 
        title={WmddData.header.title}
        subtitle={WmddData.header.subtitle}
        desc={WmddData.header.description}
        />
      <div>
        <h3>Program Curriculum</h3>
        { curriculumDetails }
      </div>
      <h3>Summary of Developer Stream</h3>
      <div className={styles.stream_grid}>
        { developerDetails }
      </div>
      <h3>Summary of Designer Stream</h3>
      <div className={styles.stream_grid}>
        { designerDetails }
      </div>
      <div>
        <h3>{WmddData.complete_program.title}</h3>
        <p>{WmddData.complete_program.description}</p>
      </div>
      <AdminBox />
    </div>
  )
};

export default AboutUs;

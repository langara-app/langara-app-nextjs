import React from "react";
import { WmddData }from '../../lib/WmddData';
import TitleBox from '../../components/TitleBox';
import styles from '../../styles/WMDD.module.css';
import Button from '../../components/ReusableElements/Button';

const AboutUs = () => {

  const curriculumInfo = WmddData.curriculum;

  const curriculumDetails = curriculumInfo.map(curriculum => 
    <div>
      {/* <img className={styles.instructor_details} src={instructor.image} style={{width: 100, height: 100, borderRadius: '50%'}}/> */}
      <div>
        <p>{}</p>
        <p>{curriculum.description}</p>
      </div>
    </div>
  )

  const developerInfo = WmddData.developer_details;
  const developerDetails = developerInfo.map(detail => 
    <div>
      <div>
      <img src={detail.image} style={{width: 100, height: 100}}/>
        <p>{detail.title}</p>
      </div>
    </div>
  )

  const designerInfo = WmddData.designer_details;
  const designerDetails = designerInfo.map(detail => 
    <div>
      <div>
        <img src={detail.image} style={{width: 100, height: 100}}/>
        <p>{detail.title}</p>
      </div>
    </div>
  )

  return (
    <div className={styles.wmdd_body}>
      <TitleBox 
        title={WmddData.header.title}
        subtitle={WmddData.header.subtitle}
        desc={WmddData.header.description}
        />
        {/* <Button text={WmddData.button.title} /> */}
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
    </div>
  )
};

export default AboutUs;

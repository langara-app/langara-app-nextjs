import React from "react";
import { WmddData }from '../../lib/WmddData';
import WmddIntro from '../../components/WMDD/WmddIntro';
import styles from '../../styles/WMDD.module.css';
import AdminBox from '../../components/AdminBox';
import DevSlider from '../../components/WMDD/DevSlider';
import DesSlider from '../../components/WMDD/DesSlider';
import ataglance from '../../assets/ataglance.svg';
import AfterProgram from '../../components/WMDD/AfterProgram';
import ProgramCurriculum from '../../components/WMDD/ProgramCurriculum';

const AboutUs = () => {
  // const curriculumInfo = WmddData.curriculum;
  // const curriculumDetails = curriculumInfo.map(curriculum => 
  //     <div className={styles.curriculum_body}>
  //       <p>{curriculum.description}</p>
  //     </div>
  // )

  return (
    <div className={styles.wmdd_body}>
      <div className={styles.wmdd_full_intro}>
          <div className={styles.wmdd_intro}>
            <WmddIntro 
              subtitle={WmddData.header.title}
              title={WmddData.header.subtitle}
              desc={WmddData.header.description}
              />
          </div>
        <img src={ataglance} className={styles.wmdd_image} /> 
      </div>
      <ProgramCurriculum />
      {/* <div className={styles.curriculum_container}>
        <h3 className={styles.curriculum_title}>Program Curriculum</h3>
        <div className={styles.intro_movie_wrap}>
          <div className="intro-movie">
            <iframe className={styles.iframe} frameBorder="0" src="https://www.youtube.com/embed/BTciK1vJ8QY?rel=0" title="intro-movie"></iframe>
          </div>
        </div>
        { curriculumDetails }
      </div> */}
      <DevSlider />
      <DesSlider />
      <AfterProgram />
      <AdminBox />
    </div>
  )
};

export default AboutUs;

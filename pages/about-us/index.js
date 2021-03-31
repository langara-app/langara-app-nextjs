import React from "react";
import Image from 'next/Image'
import { WmddData }from '../../lib/WmddData';
import WmddIntro from '../../components/WMDD/WmddIntro';
import styles from '../../styles/WMDD.module.css';
import AdminBox from '../../components/AdminBox';
import DevSlider from '../../components/WMDD/DevSlider';
import DesSlider from '../../components/WMDD/DesSlider';
import instructorTyler from '../../assets/img/wmdd/instructorTyler.jpg';
import ataglance from '../../assets/ataglance.svg';

const AboutUs = () => {

  const curriculumInfo = WmddData.curriculum;

  const curriculumDetails = curriculumInfo.map(curriculum => 
      <div className={styles.curriculum_body}>
        <p>{curriculum.description}</p>
      </div>
  )

  return (
    <div className={styles.wmdd_body}>
      <div className={styles.wmdd_full_intro}>
        <div>
          {/* <p className={styles.small_title}>{WmddData.header.title}</p> */}
          <div className={styles.wmdd_intro}>
            <WmddIntro 
              subtitle={WmddData.header.title}
              title={WmddData.header.subtitle}
              desc={WmddData.header.description}
              />
          </div>
      </div>
      <div>
        <img src={ataglance} className={styles.wmdd_image} /> 
      </div>
      </div>



      <div className={styles.curriculum_container}>
        <h3 className={styles.curriculum_title}>Program Curriculum</h3>
        <div className={styles.intro_movie_wrap}>
          <div className="intro-movie">
            <iframe className={styles.iframe} frameBorder="0" src="https://www.youtube.com/embed/BTciK1vJ8QY?rel=0" title="intro-movie"></iframe>
          </div>
        </div>
        { curriculumDetails }
      </div>
      <DevSlider />
      <DesSlider />
      <div className={styles.complete_program_container}>
        <div>
          <h3 className={styles.complete_program_title}>{WmddData.complete_program.title}</h3>
          <Image src={instructorTyler} width={1000} height={700} className={styles.complete_program_image}/>
        </div>
        <p className={styles.complete_program_body}>{WmddData.complete_program.description}</p>
      </div>
      <AdminBox />
    </div>
  )
};

export default AboutUs;

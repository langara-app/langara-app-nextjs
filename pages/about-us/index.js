import React from "react";
import Image from 'next/Image'
import { WmddData }from '../../lib/WmddData';
import TitleBox from '../../components/TitleBox';
import styles from '../../styles/WMDD.module.css';
import AdminBox from '../../components/AdminBox';
import DevSlider from '../../components/WMDD/DevSlider';
import DesSlider from '../../components/WMDD/DesSlider';
import instructorTyler from '../../assets/img/wmdd/instructorTyler.jpg';
const AboutUs = () => {

  const curriculumInfo = WmddData.curriculum;

  const curriculumDetails = curriculumInfo.map(curriculum => 
      <div className={styles.curriculum_body}>
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
      <p className={styles.small_title}>{WmddData.header.title}</p>
      <div className={styles.wmdd_intro}>
        <TitleBox 
          title={WmddData.header.subtitle}
          desc={WmddData.header.description}
          />
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
      {/* <div className={styles.developer_container}>
        <h3 className={styles.dev_title}>Summary of Developer Stream</h3>
        <div className={styles.stream_grid}>
            { developerDetails }
        </div>
      </div> */}
      
        <DevSlider />
      
      
      {/* <div className={styles.designer_container}>
        <h3 className={styles.des_title}>Summary of Designer Stream</h3>
        <div className={styles.stream_grid}>
          { designerDetails }
        </div>
      </div> */}
      <DesSlider />
      <div className={styles.complete_program_container}>
        <h3 className={styles.complete_program_title}>{WmddData.complete_program.title}</h3>
        <Image src={instructorTyler} width={1000} height={700} />
        <p className={styles.complete_program_body}>{WmddData.complete_program.description}</p>
      </div>
      <AdminBox />
    </div>
  )
};

export default AboutUs;

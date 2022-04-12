import React from "react";
import Head from "next/head";
import { WmddData } from '../../lib/WmddData';
import WmddIntro from '../../components/WMDD/WmddIntro';
import styles from '../../styles/WMDD.module.css';
import AdminBox from '../../components/AdminBox';
import DevSlider from '../../components/WMDD/DevSlider';
import DesSlider from '../../components/WMDD/DesSlider';
import ataglance from '../../assets/ataglance.svg';
import AfterProgram from '../../components/WMDD/AfterProgram';
import ProgramCurriculum from '../../components/WMDD/ProgramCurriculum';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Project Overview</title>
      </Head>
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
        <DevSlider />
        <DesSlider />
        <AfterProgram />
        <AdminBox />
      </div>
    </>
  );
};

export default AboutUs;

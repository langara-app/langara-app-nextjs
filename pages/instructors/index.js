// import React from "react";
import styles from '../../styles/Instructors.module.css';

import Head from "next/head";
import TitleBox from "../../components/TitleBox";

import { InstructorData } from '../../lib/InstructorData';

const Instructors = () => {

  const instructors = InstructorData.instructors;

  const instructorDetails = instructors.map(instructor => 
    <div className={styles.image_text_grid} style={{margin: 30}}>
      <img className={styles.instructor_details} src={instructor.image} style={{width: 100, height: 100, borderRadius: '50%'}}/>
      <div>
        <p>{instructor.name}</p>
        <p>{instructor.title}</p>
      </div>
    </div>
  )
  
  return (
    <>
      <Head>
        <title>Instructors Page</title>
      </Head>
      <TitleBox 
        title={InstructorData.header.title}
        desc={InstructorData.header.description}
        />

     
     <div className={styles.instructor_grid}>
          { instructorDetails }
      </div>

     
       
    </>

  )
 
};

export default Instructors;

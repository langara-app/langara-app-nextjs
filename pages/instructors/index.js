import styles from "../../styles/Instructors.module.css";
import Head from "next/head";
import AdminBox from "../../components/AdminBox";
import { InstructorData } from "../../lib/InstructorData";
import InstructorsIntro from "../../components/Instructors/InstructorsIntro";
const Instructors = () => {
  const instructors = InstructorData.instructors;

  const instructorDetails = instructors.map((instructor) => (
    <div className={styles.image_text_grid}>
      <img className={styles.instructor_image} src={instructor.image} />
      <div>
        <p className={styles.instructor_name}>{instructor.name}</p>
        <p className={styles.instructor_description}>{instructor.title}</p>
      </div>
    </div>
  ));

  return (
    <>
      <Head>
        <title>Instructors Page</title>
      </Head>


      <div className={styles.all_content}>
          <InstructorsIntro 
            title={InstructorData.header.title}
            desc={InstructorData.header.description}/>
          <div className={styles.instructor_grid}>{instructorDetails}</div>
        <AdminBox />
      </div>
    </>
  );
};

export default Instructors;

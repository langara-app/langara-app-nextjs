import styles from '../../styles/Instructors.module.css';
import Head from "next/head";
import Link from 'next/link'
import JoinWMDD from '../../components/JoinWMDD';
import Footer from '../../components/Footer';
import { InstructorData } from '../../lib/InstructorData';

const Instructors = () => {

  const instructors = InstructorData.instructors;

  const instructorDetails = instructors.map(instructor => 
    <div className={styles.image_text_grid}>
      <img className={styles.instructor_image} src={instructor.image}/>
      <div>
        <p className={styles.instructor_name}>{instructor.name}</p>
        <p className={styles.instructor_description}>{instructor.title}</p>
      </div>
    </div>
  )
  
  return (
    <>
      <Head>
        <title>Instructors Page</title>
      </Head>
      <div className={styles.all_content}>
        <div className={styles.body_content}>
        <Link href="/">
          <a><img className={styles.langara_logo} src="/langara-logo.svg" alt="Langara College Logo" /></a>
        </Link>
          <img className={styles.langara_hamburger} src="hamburger.svg" alt="Mobile Menu Button" />
          <h1 className={styles.title_main}>{InstructorData.header.title}</h1>
          <p className={styles.description_main}>{InstructorData.header.description}</p>
          <div className={styles.planet_container}>
            <img className={styles.planet} src="temporary-planet.svg" alt="planet illustration" />
          </div>
          <div className={styles.instructor_grid}>
                { instructorDetails }
          </div>
        </div>
        <JoinWMDD />
        <Footer />
      </div>
    </>

  )
 
};

export default Instructors;

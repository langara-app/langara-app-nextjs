import styles from '../styles/JoinWMDD.module.css';
import Button from './ReusableElements/Button';
import styled from "styled-components";

const JoinWMDD = () => {

//   const instructors = InstructorData.instructors;
  
  return (
    <>
    
      <div className={styles.joinWMDD_content}>
            <h1 className={styles.joinWMDD_title}>Join WMDD Now</h1>
            <p className={styles.joinWMDD_desc}>You've seen a glimpse of the incredible experiences awaiting you at WMDD. Now, take the next step and join us.</p>
           
              {/* <Button className={styles.joinWMDD_button} text="See Admission Requirements" /> */}
              <Button text="See Admission Requirements" />
            
      </div>
    </>

  )
 
};

export default JoinWMDD;


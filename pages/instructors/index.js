import Head from "next/head";
import AdminBox from "../../components/AdminBox";
import { InstructorData } from "../../lib/InstructorData";
import InstructorsIntro from "../../components/Instructors/InstructorsIntro";
import InstructorsDetails from "../../components/Instructors/InstructorsDetails";

const Instructors = () => {
  return (
    <>
      <Head>
        <title>Instructors Page</title>
      </Head>
      <div>
        <InstructorsIntro 
          title={InstructorData.header.title}
          desc={InstructorData.header.description}/>
        <InstructorsDetails
          image={InstructorData.instructors.image}
          name={InstructorData.instructors.name}
          desc={InstructorData.instructors.title} />
        <AdminBox />
      </div>
    </>
  );
};

export default Instructors;

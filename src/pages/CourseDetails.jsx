import { useParams } from "react-router-dom";
import Nagivate from "../Components/Nagivate";

const CourseDetails = () => {
  const prams = useParams();

  return (
    <div>
       <Nagivate/>
      <h1>{prams.id} Course Details Page</h1>
    </div>
  );
};

export default CourseDetails;

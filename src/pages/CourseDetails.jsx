import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const prams = useParams();

  return (
    <div>
      <h1>{prams.id} Course Details Page</h1>
    </div>
  );
};

export default CourseDetails;

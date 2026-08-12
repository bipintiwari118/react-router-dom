import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-green-500  text-white cursor-pointer px-6 py-3 mt-10 ml-3 rounded-xl font-medium active:scale-95"
      >
        Return to Home
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-green-500  text-white cursor-pointer px-6 py-3 mt-10 ml-3 rounded-xl font-medium active:scale-95"
      >
        Back
      </button>
      <h1>This is about us page.</h1>
    </div>
  );
};

export default About;

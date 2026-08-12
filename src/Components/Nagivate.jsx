import { useNavigate } from "react-router-dom";

const Nagivate = () => {
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
    </div>
  );
};

export default Nagivate;

import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BackIcon = () => {
     const navigate = useNavigate();
     const iconStyle = {
      color: 'red',
      padding:'5px',
      backgroundColor:'white',
      border:'none',
      fontSize:'18px'
    };
     

  return (
    <>
      <div>
        <button onClick={() => navigate("/dasboard")}>
          <MdArrowBackIosNew style={iconStyle} />
        </button>
      </div>
    </>
  );
};

export default BackIcon;
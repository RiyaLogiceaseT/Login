
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  function ssnclr(){
    navigate("/");
    sessionStorage.removeItem("username");
  }

  return (
    <div>
      <button
        style={{
          fontSize:'20px',
          fontWeight:'bold',
          backgroundColor: "white",
          color: "#041f41",
          padding: "10px 15px",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
        }} onClick={() =>ssnclr()}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
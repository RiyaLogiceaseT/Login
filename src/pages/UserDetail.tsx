import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import "../styles/App.css";
import Employee from "../interfaces/Employee";


const UserDetail = () => {
  const { id } = useParams(); // Get the user's id from the URL
  const [user, setUser] = useState<Employee | null>(null);
  // const isResourceDetails = true;
  
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`) 
      .then((res) => {
        // Assuming the API response contains the user's details
        setUser(res.data);
        // console.log(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {user && (
        <div>
          <div className="specific">

            <Header isResourceDetails={true} />

            <h1>User Details</h1>
          
            <div className="data">
              <div className="user-image">
                <p>
                  <img src={user.image} alt="" />
                </p>
              </div>

              <div className="user-data">
                <p>
                  <strong>Id:</strong> &nbsp; {user.id}
                </p>
                <p>
                  <strong>FirstName:</strong> &nbsp; {user.firstName}
                </p>
                <p>
                  <strong>LastName:</strong> &nbsp; {user.lastName}
                </p>
                <p>
                  <p>
                    <strong>Address:</strong> &nbsp; {user.address.address}
                  </p>
                  <strong>Age:</strong> &nbsp; {user.age}
                </p>
                <p>
                  <strong>Gender:</strong> &nbsp; {user.gender}
                </p>
                <p>
                  <strong>Date Of Birth:</strong> &nbsp; {user.birthDate}
                </p>
                <p>
                  <strong>E-mail:</strong> &nbsp; {user.email}
                </p>
                <p>
                  <strong>Contact Number:</strong> &nbsp; {user.phone}
                </p>
                <p>
                  <strong>University:</strong> &nbsp; {user.university}
                </p>
                <p>
                  <strong>Height:</strong> &nbsp; {user.height}
                </p>
                <p>
                  <strong>Weight:</strong> &nbsp; {user.weight}
                </p>
                <p>
                  <strong>City:</strong> &nbsp; {user.address.city}
                </p>
              </div>
            </div>


          </div>
        </div>
      )}
    </div>
  );

};
export default UserDetail;
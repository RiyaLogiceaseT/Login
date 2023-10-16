import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/App.css";
import Header from "../components/Header";
import Employee from "../interfaces/Employee";
import TableData from "../components/TableData";

const Dashboard = () => {
  const storedUsername = sessionStorage.getItem("username");
  if (storedUsername !== "kminchelle") {
    alert("Access Denied");
  } else {
    const [userData, setUserData] = useState<Employee[]>([]);
    const [page, setPage] = useState(1);
    const usersPerPage = 8;
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            `https://dummyjson.com/users?limit=${usersPerPage}&page=${page}`
          );
          const fetchedData = res.data.users;
          setUserData((prevData) => [...prevData, ...fetchedData]);
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();
    }, [page]);

    
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.scrollHeight
      ) {
        // Calculate the next page
        const nextPage = Math.floor(userData.length / usersPerPage) + 1;
        if (nextPage > page) {
          setPage(nextPage);
        }
      }
    };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [userData]);



    return (
      <>
        <div>
          <Header isResourceDetails={false} />
        </div>
        <div>
          <p className="emp">User Details</p>
        </div>
        <div className="API-data">
          <TableData userData={userData} />
        </div>
        
      </>
    );
  }
};
export default Dashboard;
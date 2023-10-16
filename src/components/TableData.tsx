import React from "react";
import { Link } from "react-router-dom";
import Employee from "../interfaces/Employee";

interface TableDataProps {
  userData: Employee[];
}

const TableData: React.FC<TableDataProps> = ({ userData }) => {
  return (
    <div className="tabular-data">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Photo</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>
              <td>
                <img
                  src={user.image}
                  className="table-images"
                  alt={`User ${user.id}`}
                />
              </td>
              <td>
                <Link to={`/ad/${user.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;

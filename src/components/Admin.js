import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  // const url = "https://jsonplaceholder.typicode.com/users";
  const url = "http://localhost:8000/enquiries";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
  }, []);

  const renderTable = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.message}</td>
        </tr>
      );
    });
  };

  return (
    <section id="admin">
      <div>
        <h1 id="title">Admin</h1>
        <table id="users">
          {" "}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Admin;

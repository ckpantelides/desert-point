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
        <div className="enquiry-card">
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.message}</p>
        </div>
      );
    });
  };

  return (
    <section id="admin">
      <div>
        <h1 id="title">Admin</h1>
        <div className="enquiry-card-container">{renderTable()}</div>
      </div>
    </section>
  );
};

export default Admin;

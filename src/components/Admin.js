//import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const Admin = () => {
  // const url = "https://jsonplaceholder.typicode.com/users";
  const url = "http://localhost:8000/enquiries";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
  }, []);

  const SortableEnquiry = SortableElement(({ value }) => (
    <div className="enquiry-card">
      <p>{value.name}</p>
      <p>{value.email}</p>
      <p>{value.message}</p>
    </div>
  ));

  const SortableEnquiryContainer = SortableContainer(({ items }) => (
    <div className="enquiry-card-container">
      {items.map((value, index) => (
        <SortableEnquiry key={`item-${value}`} index={index} value={value} />
      ))}
    </div>
  ));

  const onSortEnd = ({ oldIndex, newIndex }) =>
    setData(arrayMove(data, oldIndex, newIndex));

  /*
  return (
    <div id="admin">
      <h1>Admin</h1>
      <SortableEnquiryContainer axis="xy" onSortEnd={onSortEnd} items={data}>
        {data.map((user, i) => (
          <SortableEnquiry />
        ))}
      </SortableEnquiryContainer>
    </div>
  );
  */
  return (
    <div id="admin">
      <h1>Admin</h1>
      <SortableEnquiryContainer
        axis="xy"
        onSortEnd={onSortEnd}
        items={data}
        onSortStart={(_, event) => event.preventDefault()}
        pressDelay="100"
      />
    </div>
  );
};

export default Admin;

/*
  const renderEnquiries = () => {
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
        <div className="enquiry-card-container">{renderEnquiries()}</div>
      </div>
    </section>
  );
};

export default Admin;
*/

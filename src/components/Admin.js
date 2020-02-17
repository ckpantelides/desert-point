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

  // function to mark enquiries as "read". All enquiries are initially set as read:"false".
  // This function creates a copy of the data retrieved from the database. When the rowid matches
  // the rowid of the data, read is marked as "true"
  function readEnquiry(rowid) {
    const updatedData = data.map(data =>
      // read: "true" rather than true as sqlite does not accept booleans
      // will be updated for release with postgressql
      data.rowid === rowid ? { ...data, read: "true" } : data
    );
    setData(updatedData);
  }

  function deleteEnquiry(rowid) {
    const filteredData = data.filter(data => data.rowid !== rowid);
    setData(filteredData);
  }

  const SortableEnquiry = SortableElement(
    ({ value, readEnquiry, deleteEnquiry }) => (
      // currently === "true" not true as sqlite not accept boolean
      <div className={`enquiry-card${value.read === "true" ? " read" : ""}`}>
        <div className="enquiryButtonWrapper">
          <button className="enquiryButton" type="button" onClick={readEnquiry}>
            <img src="images/tick.png" className="buttonIcon" alt="tick" />
          </button>
          <button
            className="enquiryButton"
            type="button"
            onClick={deleteEnquiry}
          >
            <img src="images/bin.png" className="buttonIcon" alt="bin" />
          </button>
        </div>
        <p className="enquiry-header">Enquiry date: {value.enquirydate}</p>
        <p>{value.name}</p>
        <p>{value.email}</p>
        <p>{value.telephone}</p>
        <p>{value.dates}</p>
        <p>{value.package}</p>
        <p className="enquiry-footer">Message:</p>
        <p>{value.message}</p>
      </div>
    )
  );

  const SortableEnquiryContainer = SortableContainer(({ items }) => (
    <div className="enquiry-card-container">
      {items.map((value, index) => (
        // <SortableEnquiry key={`item-${value}`} index={index} value={value} />
        <SortableEnquiry
          key={value.rowid}
          index={index}
          value={value}
          readEnquiry={() => readEnquiry(value.rowid)}
          deleteEnquiry={() => deleteEnquiry(value.rowid)}
        />
      ))}
    </div>
  ));

  const onSortEnd = ({ oldIndex, newIndex }) =>
    setData(arrayMove(data, oldIndex, newIndex));

  return (
    <div id="admin">
      <h1>Enquiries</h1>
      <h4>
        You can drag the enquiries to reorder them, mark them as "read" or
        delete them
      </h4>
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

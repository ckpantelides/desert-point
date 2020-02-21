import { useState, useEffect } from 'react';
import axios from 'axios';

import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const Admin = () => {
  const url = 'https://desert-point-server.herokuapp.com/enquiries';
  // setData will update data variable using useState
  const [data, setData] = useState([]);

  // retrieve enquiries from backend, assign to data variable
  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
  }, []);

  // function to mark enquiries as "read". All enquiries are initially set as read:"false".
  // This function creates a copy of the data retrieved from the database. When the rowid matches
  // the rowid of the data, read is marked as "true"
  function readEnquiry(rowid) {
    const updatedData = data.map(data =>
      // read: "true" rather than true as sqlite does not accept booleans
      // this can now be changed to boolean as postgressql accepts booleans
      data.rowid === rowid ? { ...data, read: 'true' } : data
    );
    setData(updatedData);
  }

  // function to delete an enquiry. It returns all the enquiries except
  // for the enquiry with the rowid selected by the user
  function deleteEnquiry(rowid) {
    const filteredData = data.filter(data => data.rowid !== rowid);
    setData(filteredData);
  }

  // function to send any changes to the enquiries to the backend
  function saveChanges() {
    axios.post(`https://desert-point-server.herokuapp.com/update-enquiries`, {
      data
    });
  }

  // SortableEnquiry inherits the features of SortableElement from react-sortable-hoc,
  // allowing it to be dragged and dropped. It displays each enquiry and has 2 buttons
  // to mark as read and to delete the enquiry
  const SortableEnquiry = SortableElement(
    ({ value, readEnquiry, deleteEnquiry }) => (
      // currently === "true" not true as sqlite does not accept boolean
      // when an item is marked as "read", it will change color
      <div className={`enquiry-card${value.read === 'true' ? ' read' : ''}`}>
        <div className='enquiryButtonWrapper'>
          <button className='enquiryButton' type='button' onClick={readEnquiry}>
            <img src='images/tick.png' className='buttonIcon' alt='tick' />
          </button>
          <button
            className='enquiryButton'
            type='button'
            onClick={deleteEnquiry}
          >
            <img src='images/bin.png' className='buttonIcon' alt='bin' />
          </button>
        </div>
        <p className='enquiry-header'>Enquiry date: {value.enquirydate}</p>
        <hr></hr>
        <p>{value.name}</p>
        <p>{value.email}</p>
        <p>{value.telephone}</p>
        <p>{value.dates}</p>
        <p>{value.package}</p>
        <hr></hr>
        <p className='enquiry-footer'>Message:</p>
        <p>{value.message}</p>
      </div>
    )
  );

  // SortableEnquiryContainer will hold the SortableEnquiries, allowing them to
  // be dragged and dropped. It will map the enquiry data and pass it to each
  // SortableEnqiury element
  const SortableEnquiryContainer = SortableContainer(({ items }) => (
    <div className='enquiry-card-container'>
      {items.map((value, index) => (
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

  // data elements will be updated with a new index once they've been moved
  // this function will be passed to the SortableEnquiryContainer below
  const onSortEnd = ({ oldIndex, newIndex }) =>
    setData(arrayMove(data, oldIndex, newIndex));

  return (
    <div id='admin'>
      <h1>Enquiries</h1>
      <h4>
        Drag enquiries to reorder them. Tick to mark as read. Bin to delete
      </h4>
      <button onClick={saveChanges} className='enquiry-save'>
        {' '}
        <img src='images/save.png' className='buttonIcon' alt='save' /> Save
        changes
      </button>
      <SortableEnquiryContainer
        axis='xy'
        onSortEnd={onSortEnd}
        items={data}
        onSortStart={(_, event) => event.preventDefault()}
        pressDelay='150'
      />
    </div>
  );
};

export default Admin;

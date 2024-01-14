import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './createForm.css'; 




function CreateForm() {


  const [notes, setNotes] = useState([]);
  const [createForm, setCreateForm] = useState({
    hmos:"",
    billedMonth:"",
    billedAmount:"",
    paymentDate:"",
    diffrencies: "",
    scannedCopies: "",
    remarks:"",
   });

   
   const updateCreateFormField = (e) => {
    const {name, value} = e.target;

    setCreateForm({
        ...createForm,
        [name]: value
    })
  }


  const createNote = async (e) => {
    e.preventDefault();


    const res = await axios.post("http://localhost:5000/notes", createForm)
    setNotes([...notes, res.data.note])

    setCreateForm({
    hmos:"",
    billedMonth:"",
    billedAmount:"",
    paymentDate:"",
    diffrencies: "",
    scannedCopies: "",
    remarks:"",
  })
  }



  return (
    <div className='app_settings outlet'>
      <div className="CreateBookingForm">
      <h2>Create note</h2>
      <form className='form' onSubmit={createNote}>
        

        <div className="row row-1">
        <div className="input-field">
          <p className='label'>HMOS</p>
          <div className='input-box'>
        <input
          placeholder="hmos"
          onChange={updateCreateFormField}
          value={createForm.hmos}
          name="hmos"
        />
        </div>
        </div>
        <div className="input-field">
          <p className='label'>BILLED MONTH</p>
          <div className='input-box'>
        <input 
          placeholder="billedMonth"
          onChange={updateCreateFormField}
          value={createForm.billedMonht}
          name="billedMonth"
          type="date" // Set input type to 'date'
          required // Field is required
        />
        </div>
        </div>
        <div className="input-field">
          <p className='label'>BILLED AMOUNT</p>
          <div className='input-box'>
        <input
          placeholder="billedAmount"
          onChange={updateCreateFormField}
          value={createForm.billedAmount}
          name="billedAmount"
          type="text" // Set input type to 'text'
          pattern="[0-9]*" // Specify pattern to allow only numbers
          title="Please enter only numbers" // Error message for invalid input
          required  // Field is required
        />
        </div>
        </div>
        </div>


        <div className="row row-2">
        <div className="input-field">
          <p className='label'>PAID AMOUNT</p>
          <div className='input-box'>
        <input 
          placeholder="paidAmount"
          onChange={updateCreateFormField}
          value={createForm.paidAmount}
          name="paidAmount"
          type="text" // Set input type to 'text'
          pattern="[0-9]*" // Specify pattern to allow only numbers
          title="Please enter only numbers" // Error message for invalid input
          required  // Field is required
        />
        </div>
        </div>
        <div className="input-field">
          <p className='label'>PAYMENT DATE</p>
          <div className='input-box'>
        <input
          placeholder="paymentDate"
          onChange={updateCreateFormField}
          value={createForm.paymentDate}
          name="paymentDate"
          type="date" // Set input type to 'date'
          required // Field is required
        />
        </div>
        </div>
        {/* <div className="input-box">
        <input
          placeholder="diffrencies"
          onChange={store.updateCreateFormField}
          value={store.createForm.diffrencies}
          name="diffrencies"
        />
        </div> */}
        <div className="input-field">
          <p className='label'>SCANNED COPIES</p>
          <div className='input-box'>
        <input
          placeholder="scannedCopies"
          onChange={updateCreateFormField}
          value={createForm.scannedCopies}
          name="scannedCopies"
        />
        </div>
        </div>
        </div>

        <div className="row row-3">
        <div className="input-field">
          <p className='label'>REMARKS</p>
          <div className='input-box'>
        <input
          placeholder="remarks"
          onChange={updateCreateFormField}
          value={createForm.remarks}
          name="remarks"
        />
        </div>
        </div>
        
        <div className='input-box'>
          <div className='btn'>
        <button className="custom-button" type="submit">Create note</button>
        </div>
        </div>
        </div>
        
        
      </form>
      </div>
    </div>
  );
}

export default CreateForm;
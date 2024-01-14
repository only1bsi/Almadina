import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./UpdateForm.css"

function UpdateForm() {
  const [notes, setNotes] = useState([]);
  const [updateForm, setUpdateForm] = useState({
    hmos: "",
    billedMonth: "",
    billedAmount: "",
    paymentDate: "",
    diffrencies: "",
    scannedCopies: "",
    remarks: "",
  });

  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value
    });
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    fetchNotes();
  };

  const toggleUpdate = (note) => {
    setUpdateForm({
      hmos: note.hmos,
      billedMonth: note.billedMonth,
      billedAmount: note.billedAmount,
      paymentDate: note.paymentDate,
      diffrencies: note.diffrencies,
      scannedCopies: note.scannedCopies,
      remarks: note.remarks,
      _id: note._id
    });
  };

  const updateNote = async (e) => {
    e.preventDefault();
    const { hmos, billedMonth, billedAmount, paymentDate, diffrencies, scannedCopies, remarks, _id } = updateForm;
    await axios.put(`http://localhost:5000/notes/${_id}`, { hmos, billedMonth, billedAmount, paymentDate, diffrencies, scannedCopies, remarks });
    fetchNotes();
  };

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/notes");
    setNotes(res.data.notes);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <div className='app_settingd outlet'>
        <h2>Notes:</h2>
        {notes &&
          notes.map((note) => (
            <div className='note-div' key={note._id}>
              <h3>{note.title}</h3>
              <h3>{note.body}</h3>
              <h3>{note.hmos}</h3>
              <h3>{note.billedMonth}</h3>
              <h3>{note.billedAmount}</h3>
              <h3>{note.paidAmount}</h3>
              <h3>{note.diffrencies}</h3>
              <h3>{note.scannedCopies}</h3>
              <h3>{note.remarks}</h3>
              <button onClick={() => deleteNote(note._id)}>delete Note</button>
              <button onClick={() => toggleUpdate(note)}>Update Note</button>
            </div>
          ))}
      </div>

      {updateForm._id && ( <div className='app_settings outlet'>
        <h2>Update note</h2>
        <form onSubmit={updateNote}>
          <input
            placeholder="hmos"
            onChange={handleUpdateFieldChange}
            value={updateForm.hmos}
            name="hmos"
          />
          <input
            placeholder="billedMonth"
            onChange={handleUpdateFieldChange}
            value={updateForm.billedMonth}
            name="billedMonth"
          />
          <input
            placeholder="billedAmount"
            onChange={handleUpdateFieldChange}
            value={updateForm.billedAmount}
            name="billedAmount"
          />
          <input
            placeholder="paidAmount"
            onChange={handleUpdateFieldChange}
            value={updateForm.paidAmount}
            name="paidAmount"
          />
          <input
            placeholder="paymentDate"
            onChange={handleUpdateFieldChange}
            value={updateForm.paymentDate}
            name="paymentDate"
          />
          <input
            placeholder="diffrencies"
            onChange={handleUpdateFieldChange}
            value={updateForm.diffrencies}
            name="diffrencies"
          />
          <input
            placeholder="scannedCopies"
            onChange={handleUpdateFieldChange}
            value={updateForm.scannedCopies}
            name="scannedCopies"
          />
          <input
            placeholder="remarks"
            onChange={handleUpdateFieldChange}
            value={updateForm.remarks}
            name="remarks"
          />

          <button type="submit">Update note</button>
        </form>
      </div> )}
    </div>
  );
}

export default UpdateForm;
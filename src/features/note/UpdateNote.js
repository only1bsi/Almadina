
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotes } from './noteSlice';
import "./UpdateNotes.css"

function UpdateNote() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  // Reverse the notes array before mapping for reversed rendering
  const reversedNotes = notes.notes.slice().reverse();

  return (
    <div className=''>
    <div className='table-container'>
      
        <h2>Crude App With Json Server</h2>
        <button className='btn btn-success my-3'>Create +</button>
        <table className='table'>
          <thead className='table-head'>
            <tr>
              <th>HMOS</th>
              <th>Billed Month</th>
              <th>Billed Amount</th>
              <th>Paid Amount</th>
              <th>Differences</th>
              <th>Scanned Copies</th>
              <th>Remarks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {reversedNotes.map((note, index) => (
              <tr key={index}>
                <td>{note.hmos}</td>
                <td>{note.billedMonth}</td>
                <td>{note.billedAmount}</td>
                <td>{note.paidAmount}</td>
                <td>{note.diffrencies}</td>
                <td>{note.scannedCopies}</td>
                <td>{note.remarks}</td>
                <td>
                <Link to={`/update-note/:id${notes.id}`} className='btn btn-sm btn-primary'>
                    Edit
                  </Link>
                  <button className='btn btn-sm btn-danger ms-2'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UpdateNote;


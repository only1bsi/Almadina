



// UpdateNoteForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNotes, updateNote } from '../../../features/note/noteSlice';
import { useNavigate } from 'react-router-dom';

function UpdateNoteForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notes = useSelector((state) => state.note.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const existingNote = notes.find((note) => String(note.id) === id);

  const [uhmos, setHmos] = useState(existingNote ? existingNote.hmos : '');
  const [ubilledMonth, setBilledMonth] = useState(existingNote ? existingNote.billedMonth : '');
  const [ubilledAmount, setBilledAmount] = useState(existingNote ? existingNote.billedAmount : '');
  const [upaidAmount, setPaidAmount] = useState(existingNote ? existingNote.paidAmount : '');
  const [upaymentDate, setPaymentDate] = useState(existingNote ? existingNote.paymentDate : '');
  const [uscannedCopies, setScannedCopies] = useState(existingNote ? existingNote.scannedCopies : '');
  const [uremarks, setRemarks] = useState(existingNote ? existingNote.remarks : '');
  // Add similar lines for other fields

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateNote({
        noteId: id,
        updatedNote: {
          hmos: uhmos,
          billedMonth: ubilledMonth,
          billedAmount: ubilledAmount,
          paidAmount: upaidAmount,
          paymentDate: upaymentDate,
          scannedCopies: uscannedCopies,
          remarks: uremarks,
        },
      })
    );
    navigate(`/update-record`);
  };

  return (
    <div className='app_settings outlet'>
      <div className="CreateBookingForm">
        <h2>Update Record</h2>
        <form className='form'>
          
         <div className="row row-1">
         <div className="input-field">
           <p className='label'>HMOS</p>
           <div className='input-box'>
         <input
          placeholder="hmos"
          value={uhmos}
          name="hmos"
          onChange={(e) => setHmos(e.target.value)}
        />
        </div>
        </div>
        <div className="input-field">
          <p className='label'>BILLED MONTH</p>
          <div className='input-box'>
        <input 
          placeholder="billedMonth"
          value={ubilledMonth}
          name="billedMonth"
          onChange={(e) => setBilledMonth(e.target.value)}
          type="date" // Set input type to 'date'
          
        />
        </div>
        </div>
        <div className="input-field">
          <p className='label'>BILLED AMOUNT</p>
          <div className='input-box'>
        <input
          placeholder="billedAmount"
          value={ubilledAmount}
          name="billedAmount"
          onChange={(e) => setBilledAmount(e.target.value)}
          type="text" // Set input type to 'text'
          pattern="[0-9]*" // Specify pattern to allow only numbers
          title="Please enter only numbers" // Error message for invalid input
         
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
          value={upaidAmount}
          name="paidAmount"
          onChange={(e) => setPaidAmount(e.target.value)}
          type="text" // Set input type to 'text'
          pattern="[0-9]*" // Specify pattern to allow only numbers
          title="Please enter only numbers" // Error message for invalid input
        
        />
        </div>
        </div>
        <div className="input-field">
          <p className='label'>PAYMENT DATE</p>
          <div className='input-box'>
        <input
          placeholder="paymentDate"
          value={upaymentDate}
          name="paymentDate"
          onChange={(e) => setPaymentDate(e.target.value)}
          type="date" // Set input type to 'date'
      
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
          value={uscannedCopies}
          name="scannedCopies"
          onChange={(e) => setScannedCopies(e.target.value)}
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
          value={uremarks}
          name="remarks"
          onChange={(e) => setRemarks(e.target.value)}
        />
        </div>
        </div>
        
        <div className='input-box'>
          <div className='btn'>
        <button on onClick={handleUpdate} className="custom-button" type="submit">Update Record</button>
        </div>
        </div>
        </div>


        </form>
      </div>
    </div>
  );
}

export default UpdateNoteForm;







// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchNotes } from '../../../features/note/noteSlice';
// import { updateNote } from '../../../features/note/noteSlice';
// import { useNavigate } from 'react-router-dom';


// function UpdateNoteForm() {
//   const {id} = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate()
//   const note = useSelector((state) => state.note.notes);


//   useEffect(() => {
//     dispatch(fetchNotes());
//   }, [dispatch]);



//   const existingNote = note.find((f) => f.id == id);

//   // const [formData, setFormData] = useState({
//   //   hmos: '',
//   //   billedMonth: '',
//   //   billedAmount: '',
//   //   paidAmount: '',
//   //   paymentDate: '',
//   //   differences: '',
//   //   scannedCopies: '',
//   //   remarks: '',
//   // });



// // Use existingUser to set the initial state values
// const [uhmos, setHmos] = useState(existingNote ? existingNote.hmos : '');
// const [ubilledMonth, setBilledMonth] = useState(existingNote ? existingNote.billedMonth : '');
// const [ubilledAmount, setBilledAmount] = useState(existingNote ? existingNote.billedAmount : '');
// const [upaidAmount, setPaidAmount] = useState(existingNote ? existingNote.paidAmount : '');
// const [upaymentDate, setPaymentDate] = useState(existingNote ? existingNote.paymentDate : '');
// const [udifferences, setDifferences] = useState(existingNote ? existingNote.differences : '');
// const [uscannedCopies, setScannedCopies] = useState(existingNote ? existingNote.scannedCopies : '');
// const [uremarks, setRemarks] = useState(existingNote ? existingNote.remarks : '');
// // ... (similar changes for other input fields)

// const handleUpdate = (event) => {
//   event.preventDefault();
//   dispatch(updateNote({
//     id: id,
//     hmos: uhmos,
//     billedMonth: ubilledMonth,
//     billedAmount: ubilledAmount,
//     paidAmount: upaidAmount,
//     paymentDate: upaymentDate,
//     scannedCopies: uscannedCopies,
//     remarks: uremarks,
//   }))
//   navigate("/update-note/:id")
// }




//   return (
//     <div className='app_settings outlet'>
//       <div className="CreateBookingForm">
//       <h2>Update Record</h2>
//       <form className='form'>
        

//         <div className="row row-1">
//         <div className="input-field">
//           <p className='label'>HMOS</p>
//           <div className='input-box'>
//         <input
//           placeholder="hmos"
//           value={uhmos}
//           name="hmos"
//           onChange={(e) => setHmos(e.target.value)}
//         />
//         </div>
//         </div>
//         <div className="input-field">
//           <p className='label'>BILLED MONTH</p>
//           <div className='input-box'>
//         <input 
//           placeholder="billedMonth"
//           value={ubilledMonth}
//           name="billedMonth"
//           onChange={(e) => setBilledMonth(e.target.value)}
//           type="date" // Set input type to 'date'
          
//         />
//         </div>
//         </div>
//         <div className="input-field">
//           <p className='label'>BILLED AMOUNT</p>
//           <div className='input-box'>
//         <input
//           placeholder="billedAmount"
//           value={ubilledAmount}
//           name="billedAmount"
//           onChange={(e) => setBilledAmount(e.target.value)}
//           type="text" // Set input type to 'text'
//           pattern="[0-9]*" // Specify pattern to allow only numbers
//           title="Please enter only numbers" // Error message for invalid input
         
//         />
//         </div>
//         </div>
//         </div>


//         <div className="row row-2">
//         <div className="input-field">
//           <p className='label'>PAID AMOUNT</p>
//           <div className='input-box'>
//         <input 
//           placeholder="paidAmount"
//           value={upaidAmount}
//           name="paidAmount"
//           onChange={(e) => setPaidAmount(e.target.value)}
//           type="text" // Set input type to 'text'
//           pattern="[0-9]*" // Specify pattern to allow only numbers
//           title="Please enter only numbers" // Error message for invalid input
        
//         />
//         </div>
//         </div>
//         <div className="input-field">
//           <p className='label'>PAYMENT DATE</p>
//           <div className='input-box'>
//         <input
//           placeholder="paymentDate"
//           value={upaymentDate}
//           name="paymentDate"
//           onChange={(e) => setPaymentDate(e.target.value)}
//           type="date" // Set input type to 'date'
      
//         />
//         </div>
//         </div>
//         {/* <div className="input-box">
//         <input
//           placeholder="diffrencies"
//           onChange={store.updateCreateFormField}
//           value={store.createForm.diffrencies}
//           name="diffrencies"
//         />
//         </div> */}
//         <div className="input-field">
//           <p className='label'>SCANNED COPIES</p>
//           <div className='input-box'>
//         <input
//           placeholder="scannedCopies"
//           value={uscannedCopies}
//           name="scannedCopies"
//           onChange={(e) => setScannedCopies(e.target.value)}
//         />
//         </div>
//         </div>
//         </div>

//         <div className="row row-3">
//         <div className="input-field">
//           <p className='label'>REMARKS</p>
//           <div className='input-box'>
//         <input
//           placeholder="remarks"
//           value={uremarks}
//           name="remarks"
//           onChange={(e) => setRemarks(e.target.value)}
//         />
//         </div>
//         </div>
        
//         <div className='input-box'>
//           <div className='btn'>
//         <button on onClick={handleUpdate} className="custom-button" type="submit">Update Record</button>
//         </div>
//         </div>
//         </div>
        
        
//       </form>
//       </div>
//     </div>
//   );
// }

// export default UpdateNoteForm;



// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchNotes, updateNote } from '../../../features/note/noteSlice';
// import { useNavigate } from 'react-router-dom';

// function UpdateNoteForm() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const notes = useSelector((state) => state.note.notes);

//   useEffect(() => {
//     dispatch(fetchNotes());
//   }, [dispatch]);

//   const existingNote = notes.find((note) => note.id === id);

//   const [uhmos, setHmos] = useState(existingNote ? existingNote.hmos : '');
//   const [ubilledMonth, setBilledMonth] = useState(existingNote ? existingNote.billedMonth : '');
//   const [ubilledAmount, setBilledAmount] = useState(existingNote ? existingNote.billedAmount : '');
//   const [upaidAmount, setPaidAmount] = useState(existingNote ? existingNote.paidAmount : '');
//   const [upaymentDate, setPaymentDate] = useState(existingNote ? existingNote.paymentDate : '');
//   const [udifferences, setDifferences] = useState(existingNote ? existingNote.differences : '');
//   const [uscannedCopies, setScannedCopies] = useState(existingNote ? existingNote.scannedCopies : '');
//   const [uremarks, setRemarks] = useState(existingNote ? existingNote.remarks : '');

//   const handleUpdate = (event) => {
//     event.preventDefault();
//     dispatch(
//       updateNote({
//         id: id,
//         hmos: uhmos,
//         billedMonth: ubilledMonth,
//         billedAmount: ubilledAmount,
//         paidAmount: upaidAmount,
//         paymentDate: upaymentDate,
//         differences: udifferences,
//         scannedCopies: uscannedCopies,
//         remarks: uremarks,
//       })
//     );
//     navigate('/update-record');
//   };

//   return (
//     <div className='app_settings outlet'>
//       <div className="CreateBookingForm">
//         <h2>Update Record</h2>
//         <form className='form'>
//           <div className="row row-1">
//             <div className="input-field">
//               <p className='label'>HMOS</p>
//               <div className='input-box'>
//                 <input
//                   placeholder="hmos"
//                   value={uhmos}
//                   onChange={(e) => setHmos(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="input-field">
//               <p className='label'>BILLED MONTH</p>
//               <div className='input-box'>
//                 <input
//                   placeholder="billedMonth"
//                   value={ubilledMonth}
//                   onChange={(e) => setBilledMonth(e.target.value)}
//                   type="date"
//                 />
//               </div>
//             </div>
//             <div className="input-field">
//               <p className='label'>BILLED AMOUNT</p>
//               <div className='input-box'>
//                 <input
//                   placeholder="billedAmount"
//                   value={ubilledAmount}
//                   onChange={(e) => setBilledAmount(e.target.value)}
//                   type="text"
//                   pattern="[0-9]*"
//                   title="Please enter only numbers"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* ... (similar changes for other rows and fields) */}

//           <div className="row row-3">
//             <div className="input-field">
//               <p className='label'>REMARKS</p>
//               <div className='input-box'>
//                 <input
//                   placeholder="remarks"
//                   value={uremarks}
//                   onChange={(e) => setRemarks(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className='input-box'>
//               <div className='btn'>
//                 <button onClick={handleUpdate} className="custom-button" type="submit">Update Record</button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UpdateNoteForm;



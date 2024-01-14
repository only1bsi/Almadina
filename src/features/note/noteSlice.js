// // noteSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   loading: false,
//   notes: [],
//   notesobj: {},
//   error: null,
// };

// // Async thunk to fetch notes from the server
// export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
//   try {
//     const response = await axios.get("http://localhost:5000/notes");
//     return response.data; // Assuming the API response has a 'notes' field containing an array of notes
//   } catch (error) {
//     throw error;
//   }
// });

// // Async thunk to add a new note
// export const addNote = createAsyncThunk("notes/addNote", async (newNote) => {
//   try {
//     const response = await axios.post("http://localhost:5000/notes", newNote);
//     return response.data; // Assuming the API response contains the newly added note
//   } catch (error) {
//     throw error;
//   }
// });

// // Async thunk to delete a note
// export const deleteNote = createAsyncThunk("notes/deleteNote", async (noteId) => {
//   try {
//     await axios.delete(`http://localhost:5000/notes/${noteId}`);
//     return noteId; // Return the deleted note's ID for further processing in reducers
//   } catch (error) {
//     throw error;
//   }
// });

// // Async thunk to update a note
// export const updateNote = createAsyncThunk("notes/updateNote", async ({ noteId, updatedNote }) => {
//     try {
//       const response = await axios.put(`http://localhost:5000/notes/${noteId}`, updatedNote);
//       return response.data; // Assuming the updated note data is returned from the API
//     } catch (error) {
//       throw error;
//     }
//   });
//   // updateUser: (state, action) => {
//   //   const {id, name, email} = action.payload
//   //   const uu = state.find(user => user.id == id)
//   //   if(uu){
//   //      uu.name = name;
//   //      uu.email = email;
//   //      return state.filter(f => f.id !== id)
//   //   }
// // Async thunk to update 
//   export const fetchNoteList = createAsyncThunk("notes/fetchNoteList", async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/notes");
//       return response.data; // Assuming the API response has a 'notes' field containing an array of notes
//     } catch (error) {
//       throw error;
//     }
//   });
    


// const noteSlice = createSlice({
//   name: "notes",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchNotes.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchNotes.fulfilled, (state, action) => {
//         console.log(action.payload); // Log the response to inspect its structure
//         state.loading = false;
//         state.notes = action.payload.notes;
//         state.error = "";
//       })
//       .addCase(fetchNotes.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Failed to fetch notes.";
//       })
//      // New case for fetchNoteList when fetching is fulfilled
//      .addCase(fetchNoteList.fulfilled, (state, action) => {
//       state.loading = false;
//       state.notes = action.payload.notes; // Update noteList in state with fetched notes
//       state.error = "";
//     })
//       .addCase(addNote.fulfilled, (state, action) => {
//         state.notes.push(action.payload); // Assuming the payload contains the newly added note
//       })
//       .addCase(deleteNote.fulfilled, (state, action) => {
//         state.notes = state.notes.filter((note) => note.id !== action.payload);
//         // Assuming each note has an 'id' field and action.payload contains the ID of the deleted note
//       })
//       .addCase(updateNote.fulfilled, (state, action) => {
//         console.log(action.payload); // Log the updated note to inspect its structure
//         const updatedNoteIndex = state.notes.findIndex((note) => note.id === action.payload.id);
//         if (updatedNoteIndex !== -1) {
//           state.notes[updatedNoteIndex] = action.payload;
//         }
//       })
//   },
// });


// export default noteSlice.reducer;






// noteSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  notes: [],
  error: null,
};

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  try {
    const response = await axios.get("http://localhost:5000/notes");
    return response.data; 
  } catch (error) {
    throw error;
  }
});

export const updateNote = createAsyncThunk("notes/updateNote", async ({ noteId, updatedNote }) => {
  try {
    const response = await axios.put(`http://localhost:5000/notes/${noteId}`, updatedNote);
    return { noteId, updatedNote: response.data }; // Return the updated note along with its ID
  } catch (error) {
    throw error;
  }
});
const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload.notes;
        state.error = "";
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch notes.";
      })
      .addCase(updateNote.fulfilled, (state, action) => {
        const updatedNote = action.payload.updatedNote;
        const updatedNoteIndex = state.notes.findIndex((note) => note.id === action.payload.noteId);

        if (updatedNoteIndex !== -1) {
          state.notes[updatedNoteIndex] = updatedNote;
        }
      });
  },
});

export default noteSlice.reducer;


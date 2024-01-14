import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTable, useGlobalFilter } from 'react-table';
import { fetchNotes } from './noteSlice';
import './NotesView.css';

export const NotesView = () => {
  const note = useSelector((state) => state.note);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      { Header: 'HMOs', accessor: 'hmos' },
      { Header: 'Billed Month', accessor: 'billedMonth' },
      { Header: 'Billed Amount', accessor: 'billedAmount' },
      { Header: 'Paid Amount', accessor: 'paidAmount' },
      { Header: 'Differences', accessor: 'diffrencies' },
      { Header: 'Scanned Copies', accessor: 'scannedCopies' },
      { Header: 'Remarks', accessor: 'remarks' },
    ],
    []
  );

  const data = useMemo(() => {
    // Reverse the order of note.notes to display new records at the top
    const reversedNotes = [...note.notes].reverse();
    return reversedNotes;
  }, [note.notes]);
  


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const { globalFilter } = state;



  return (
    <div className='app_settingd outlet'>
      <h2>List of Notes</h2>
      {note.loading && <div>loading...</div>}
      {!note.loading && note.error ? (
        <div>Error: {note.error}</div>
      ) : null}
      {!note.loading && note.notes.length ? (
        <>
          {/* Search Input */}
          <input
            type='text'
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder='Search...'
          />
          {/* Table */}
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : null}
    </div>
  );
};

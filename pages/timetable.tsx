import { useState } from 'react';

const Table = () => {
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    setRows([...rows, { col1: '', col2: '', col3: '', col4: '', col5: '',}]);
  };

  const handleEditRow = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.col1}
                  onChange={(e) => handleEditRow(index, 'col1', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.col2}
                  onChange={(e) => handleEditRow(index, 'col2', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.col3}
                  onChange={(e) => handleEditRow(index, 'col3', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.col4}
                  onChange={(e) => handleEditRow(index, 'col4', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.col5}
                  onChange={(e) => handleEditRow(index, 'col5', e.target.value)}
                />
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default Table;


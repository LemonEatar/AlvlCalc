import { useState } from 'react';
import { prisma } from './db'



const Table = () => {
  const [rows, setRows] = useState<any[]>([]);

  const handleAddRow = async() => {
    setRows([...rows, { monday: '', tuesday: '', wednesday: '', thursday:'', friday:'',}]);

    };

  const handleEditRow = (index: any, field: any, value: any) => {
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
                  value={row.monday}
                  onChange={(e) => handleEditRow(index, 'monday', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.tuesday}
                  onChange={(e) => handleEditRow(index, 'tuesday', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.wednesday}
                  onChange={(e) => handleEditRow(index, 'wednesday', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.thursday}
                  onChange={(e) => handleEditRow(index, 'thursday', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.friday}
                  onChange={(e) => handleEditRow(index, 'friday', e.target.value)}
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
export const getServerSideProps = async ({}) => {
 const TimeTable  = await prisma.timeTable.findUnique({
      where: {
        id: 1,
      }
    })
  return {
   
    props: {TimeTable} 
  }
}
export default Table;


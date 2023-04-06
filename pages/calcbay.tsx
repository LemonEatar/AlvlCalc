import { useState } from "react";

interface TableData {
  id: number;
  value: string;
}

const Table = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddRow = () => {
    const newTableData = [...tableData];
    newTableData.push({ id: Date.now(), value: inputValue });
    setTableData(newTableData);
    setInputValue("");
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddRow}>Add</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

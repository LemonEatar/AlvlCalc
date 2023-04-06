import React, { useState } from "react";
import Head from "next/head";

interface TableHeader {
  key: string;
  title: string;
}

interface TableData {
  [key: string]: number | string;
}

const initialTableHeaders: TableHeader[] = [
  { key: "id", title: "ID" },
  { key: "name", title: "Name" },
];

const Table: React.FC = () => {
  const [tableHeaders, setTableHeaders] = useState(initialTableHeaders);
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [editedRowIndex, setEditedRowIndex] = useState<number | null>(null);
  const [editedRowValues, setEditedRowValues] = useState<Partial<TableData>>(
    {}
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const { value } = event.target;
    if (key === "id" && isNaN(parseInt(value))) {
      return;
    }
    setEditedRowValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleEditRow = (rowIndex: number) => {
    setEditedRowIndex(rowIndex);
    setEditedRowValues(tableData[rowIndex]);
  };

  const handleSaveRow = () => {
    if (editedRowIndex !== null) {
      const newRow = {
        ...tableData[editedRowIndex],
        ...editedRowValues,
      };
      const newTableData = [...tableData];
      newTableData[editedRowIndex] = newRow;
      setTableData(newTableData);
      setEditedRowIndex(null);
      setEditedRowValues({});
    }
  };

  const handleCancelEdit = () => {
    setEditedRowIndex(null);
    setEditedRowValues({});
  };

  const handleAddRow = () => {
    const newRow = {
      id: "",
      name: "",
      ...editedRowValues,
    };
    setTableData((prev) => [...prev, newRow]);
    setEditedRowValues({});
  };

  const handleAddCategory = () => {
    const newCategoryTitle = prompt("Enter new category title:");
    if (newCategoryTitle) {
      const newCategoryKey = newCategoryTitle.toLowerCase();
      setTableHeaders((prev) => [
        ...prev,
        { key: newCategoryKey, title: newCategoryTitle },
      ]);
      setTableData((prev) =>
        prev.map((row) => ({ ...row, [newCategoryKey]: "" }))
      );
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeaders.map(({ key, title }) => (
              <th key={key}>{title}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableHeaders.map(({ key }) => (
                <td key={key}>
                  {editedRowIndex === rowIndex &&
                  editedRowValues.hasOwnProperty(key) ? (
                    <input
                      type={key === "id" ? "number" : "text"}
                      value={editedRowValues[key] || row[key]}
                      onChange={(e) => handleInputChange(e, key)}
                    />
                  ) : (
                    row[key]
                  )}
                </td>
              ))}
              <td>
                {editedRowIndex === rowIndex ? (
                  <>
                    <button onClick={handleSaveRow}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEditRow(rowIndex)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
          <tr>
            {tableHeaders.map(({ key }) => (
              <td key={key}>
                <input
                  type={key === "id" ? "number" : "text"}
                  value={editedRowValues[key] || ""}
                  onChange={(e) => handleInputChange(e, key)}
                />
              </td>
            ))}
            <td>
              <button onClick={handleAddRow}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleAddCategory}>Add Category</button>
      <button className="btn">Button</button>
    </div>
  );
};
export default Table;

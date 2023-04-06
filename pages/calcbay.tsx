import { useState } from "react";

interface TableData {
  id: number;
  name: string;
  category: string;
  quantity: number;
}

interface TableHeader {
  title: string;
  key: keyof TableData;
}

const initialTableData: TableData[] = [
  { id: 1, name: "Item 1", category: "Category 1", quantity: 5 },
  { id: 2, name: "Item 2", category: "Category 2", quantity: 3 },
  { id: 3, name: "Item 3", category: "Category 1", quantity: 7 },
];

const initialTableHeaders: TableHeader[] = [
  { title: "ID", key: "id" },
  { title: "Name", key: "name" },
  { title: "Category", key: "category" },
  { title: "Quantity", key: "quantity" },
];

const Table = () => {
  const [tableData, setTableData] = useState<TableData[]>(initialTableData);
  const [tableHeaders, setTableHeaders] = useState<TableHeader[]>(
    initialTableHeaders
  );
  const [inputValues, setInputValues] = useState<Partial<TableData>>({});

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: keyof TableData
  ) => {
    const inputValue = event.target.value;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [key]: key === "quantity" ? parseInt(inputValue, 10) : inputValue,
    }));
  };

  const handleAddRow = () => {
    const newTableData = [...tableData];
    const newRowIndex = newTableData.length;
    const newTableDataItem: TableData = {
      id: Date.now(),
      name: "",
      category: "",
      quantity: 0,
      ...inputValues,
    };
    newTableData[newRowIndex] = newTableDataItem;
    setTableData(newTableData);
    setInputValues({});
  };

  const handleAddCategory = () => {
    const newCategory = prompt("Enter new category name");
    if (newCategory) {
      const newTableHeaders = [...tableHeaders];
      newTableHeaders.splice(
        2,
        0,
        { title: newCategory, key: newCategory.toLowerCase() } as TableHeader
      );
      setTableHeaders(newTableHeaders);

      const newTableData = tableData.map((item) => ({
        ...item,
        [newCategory.toLowerCase()]: 0,
      }));
      setTableData(newTableData);
    }
  };

  return (
    <div>
      <div>
        {tableHeaders.map((header) => (
          <input
            key={header.key}
            value={inputValues[header.key] || ""}
            onChange={(event) => handleInputChange(event, header.key)}
            type={header.key === "quantity" ? "number" : "text"}
            placeholder={header.title}
          />
        ))}
        <button onClick={handleAddRow}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header.key}>{header.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              {tableHeaders.map((header) => (
                <td key={header.key}>{row[header.key]}</td>
                              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddCategory}>Add Category</button>
    </div>
  );
};

export default Table;

import { useState } from "react";
import { prisma } from "./db";
import { chdir } from "process";
import { TimeTable } from "@prisma/client";

export async function getServerSideProps() {
  const timeTable = await prisma.timeTable.findMany();
  //  await prisma.timeTable.create({ data: newRow });
  console.debug({ timeTable });
  return {
    props: { timeTable },
  };
}

const Table = ({ timeTable }: { timeTable: TimeTable[] }) => {
  const [rows, setRows] = useState<TimeTable[]>([]);
  // TODO: days are always the same, 6 usestates are unneeded
  const [hour, setHour] = useState("");
  const [monday, setMonday] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [thursday, setThursday] = useState("");
  const [friday, setFriday] = useState("");
  const [name, setName] = useState("");

  const addItem = () => {
    fetch("/api/hello", { method: "GET" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error("Unable to parse json.");
      })
      .then((data) => {
        console.debug({ data });
        setName(data.name);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleAddRow = async () => {
    const newRow = {
      id: rows.length + 1,
      Hour: rows.length + 1,
      Monday: monday,
      Tuesday: tuesday,
      Wednesday: wednesday,
      Thursday: thursday,
      Friday: friday,
    };
    setRows([...rows, newRow]);
    setHour("");
    setMonday("");
    setTuesday("");
    setWednesday("");
    setThursday("");
    setFriday("");
  };

  return (
    <div>
      name: {name}
      <table>
        <thead>
          <tr>
            <th>Hour</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          {timeTable.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.Monday}</td>
              <td>{row.Tuesday}</td>
              <td>{row.Wendsday}</td>
              <td>{row.Thursday}</td>
              <td>{row.Friday}</td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={monday}
                onChange={(e) => setMonday(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={tuesday}
                onChange={(e) => setTuesday(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={wednesday}
                onChange={(e) => setWednesday(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={thursday}
                onChange={(e) => setThursday(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={friday}
                onChange={(e) => setFriday(e.target.value)}
              />
            </td>
            <td>
              <button onClick={addItem}>Add Row</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

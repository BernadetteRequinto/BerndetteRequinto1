import React, { useState } from "react";

const Citizen = ({ citizen }) => {
  const [isActive, setIsActive] = useState(citizen.Status === "Active");

  const handleToggleStatus = () => {
    setIsActive(!isActive);
  };

  return (
    <tr>
      <td>{citizen.No}</td>
      <td>{citizen.Name}</td>
      <td>{citizen.Age}</td>
      <td>{citizen.Address}</td>
      <td>
        <button onClick={handleToggleStatus}>
          {isActive ? "Active" : "Inactive"}
        </button>
      </td>
    </tr>
  );
};

const CitizensList = () => {
  const citizens = [
    { No: 1, Name: "John", Age: 30, Address: "Cabungahan", Status: "Active" },
    {
      No: 2,
      Name: "Jane",
      Age: 20,
      Address: "Tagjaguimit",
      Status: "Inactive",
    },
    { No: 3, Name: "Mike", Age: 40, Address: "Colon", Status: "Active" },
    {
      No: 4,
      Name: "Lisa",
      Age: 35,
      Address: "Paris",
      Status: "Inactive",
    },
    {
      No: 5,
      Name: "Alice",
      Age: 50,
      Address: "Bohol",
      Status: "Active",
    },
    {
      No: 6,
      Name: "Bob",
      Age: 60,
      Address: "Balirong",
      Status: "Inactive",
    },
    {
      No: 7,
      Name: "Charlie",
      Age: 70,
      Address: "Toledo",
      Status: "Active",
    },
    {
      No: 8,
      Name: "David",
      Age: 45,
      Address: "San Fernando",
      Status: "Inactive",
    },
    { No: 9, Name: "Eve", Age: 55, Address: "Santander", Status: "Active" },
    { No: 10, Name: "Frank", Age: 65, Address: "Boljoon", Status: "Active" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCitizens = citizens.filter((citizen) =>
    citizen.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Citizens App</h1>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCitizens.map((citizen) => (
            <Citizen key={citizen.No} citizen={citizen} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitizensList;

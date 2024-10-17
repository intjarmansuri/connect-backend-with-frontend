import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const response = await axios.get("http://localhost:5000/api/users");

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users`
        );

        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  });

  return (
    <>
      <h1 className="heading">Connect Backend with Frontend</h1>
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h2 className="item">Name : {user.name}</h2>
          <p className="item"> Age: {user.age}</p>
          <p className="item">Contact : {user.contact}</p>
          <p className="item"> Address : {user.address}</p>
        </div>
      ))}
    </>
  );
}

export default App;

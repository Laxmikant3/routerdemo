import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:9000/user/");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>USER LIST</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Username</th>
            <th style={styles.tableHeader}>Email</th>
            <th style={styles.tableHeader}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td style={styles.tableCell}>{user.username}</td>
              <td style={styles.tableCell}>{user.email}</td>
              <td style={styles.tableCell}>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div style={styles.buttonContainer}>
        <Link to="/users/update">
          <button style={styles.button}>Update User</button>
        </Link>
        <Link to="/users/remove">
          <button style={styles.button}>Delete User</button>
        </Link>
        <Link to="/users/create">
          <button style={styles.button}>Create User</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    maxWidth: "800px",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  tableHeader: {
    padding: "12px",
    textAlign: "center",
    borderBottom: "1px solid #666",
  },
  tableCell: {
    padding: "12px",
    textAlign: "center",
    borderBottom: "1px solid #666",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  button: {
    padding: "12px 20px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "0 10px",
    transition: "background-color 0.3s ease",
  },
};

// Add hover effect
styles.button[':hover'] = {
  backgroundColor: "#0056b3", // Darker blue on hover
};

// Add click effect
styles.button[':active'] = {
  transform: "scale(0.95)", // Slightly shrink on click
};

export default UserList;

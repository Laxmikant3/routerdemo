import React, { useState } from "react";
import axios from "axios";

const CreateUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:9000/user/", {
        username: name,
        email: email,
        phone: phone,
      });

      setName("");
      setEmail("");
      setPhone("");

      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Error creating user. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h2 style={styles.heading}>Create User</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label><br /><br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label><br /><br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="phone" style={styles.label}>
              Phone:
            </label><br /><br />
            <input
              type="number"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#333",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  formCard: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#555",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "1rem",
    color: "#fff",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#ddd",
    color: "#333",
    width: "100%",
    boxSizing: "border-box", // Ensure padding and border are included in width
  },
  button: {
    padding: "12px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "100%",
  },
};

// Add hover effect
styles.button[':hover'] = {
  backgroundColor: "#0056b3", // Darker blue on hover
};

// Add click effect
styles.button[':active'] = {
  transform: "scale(0.98)", // Slightly shrink the button on click
};

export default CreateUserForm;

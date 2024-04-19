import React, { useState } from "react";
import axios from 'axios';

function UpdateProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    try {
      await axios.patch(`http://localhost:9000/product/${name}`, {
        price: price
      });

      setName("");
      setPrice("");

      alert("Product updated successfully!");
    } catch (error) {
      console.error('Error updating product:', error);
      alert("Error updating product. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Update Product</h2>
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
            <label htmlFor="price" style={styles.label}>
              Price:
            </label><br /><br />
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={styles.input}
            />
          </div><br />
          <button type="submit" style={styles.button}>
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}

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
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#555",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "1rem",
    color: "#fff",
    marginBottom: "5px",
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
    backgroundColor: "#007bff", // Blue button color for update action
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "100%",
  },
};

export default UpdateProductForm;

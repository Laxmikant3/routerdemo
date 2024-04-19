import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";

import CreateUserList from "./components/CreateUserList";
import UpdateUserList from "./components/UpdateUserList";
import DeleteUserList from "./components/DeleteUserList";

import CreateProductList from "./components/CreateProductList";
import UpdateProductList from "./components/UpdateProductList";
import DeleteProductList from "./components/DeleteProductList";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/update" element={<UpdateUserList />} />
            <Route path="/users/remove" element={<DeleteUserList />} />
            <Route path="/users/create" element={<CreateUserList />} />

            <Route path="/products" element={<ProductList />} />
            <Route path="/products/update" element={<UpdateProductList />} />
            <Route path="/products/remove" element={<DeleteProductList />} />
            <Route path="/products/create" element={<CreateProductList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

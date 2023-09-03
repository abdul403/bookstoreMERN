import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateBooks from "./pages/CreateBooks";
import DeleteBooks from "./pages/DeleteBooks";
import Editbooks from "./pages/Editbooks";
import Home from "./pages/Home";
import ShowBooks from "./pages/ShowBooks";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/delete/:id" element={<DeleteBooks />} />
        <Route path="/books/edit/:id" element={<Editbooks />} />
        <Route path="/books/details/:id" element={<ShowBooks />} />
      </Routes>
    </div>
  );
};

export default App;

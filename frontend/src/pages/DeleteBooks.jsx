import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((errr) => {
        console.log(errr);
        setLoading(false);
      });
  };

  return (
    <div className="p-4 ">
      <BackButton />
      <h2 className="text-3xl my-4 text-center ">Delete Book</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col p-6 gap-y-2 justify-center mx-auto items-center border-2 border-sky-500 rounded-xl w-[600px]">
          <h3 className="text-2xl ">
            {" "}
            Are you Sure you want to delete this book?
          </h3>
          <button
            onClick={handleDeleteBook}
            className="p-4 bg-transparent hover:bg-neutral-100 rounded-lg text-2xl font-semibold text-rose-500"
          >
            Yes, Delete It
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBooks;

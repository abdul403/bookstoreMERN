import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed bg-black bg-opacity-90 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white/80 rounded-xl p-4 flex flex-col relative "
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-rose-400 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4 text-black text-lg">
          Lets learn what is MERN together
        </p>
        <p className="my-2 text-neutral-600 text-sm leading-5 text-justify">
          Assemble the complete stack required to build a modern web app using
          MongoDB, Express, React, and Node. This book also covers many other
          complementary tools: React Router, GraphQL, React-Bootstrap, Babel,
          and Webpack.
        </p>
      </div>
    </div>
  );
};

export default BookModal;

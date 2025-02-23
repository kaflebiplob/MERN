import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        console.log(response.data);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="`max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500"> Here</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            qui, autem molestias praesentium hic excepturi nulla cum illum
            inventore asperiores earum quos, repellendus soluta. Modi eveniet
            eos culpa incidunt fuga.
          </p>
          <a href="/">
            {" "}
            <button className="btn btn-secondary mt-4 px-2 py-4 rounded-md hover:bg-pink-700 hover:uration-300">
              back
            </button>
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1  md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;

// import React from 'react'
import Cards from "../components/Cards";
// import list from "../../public/list.json"
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try {
      const res =await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setBook(res.data);
      } catch (error) {
        console.log(error);
        
      }
    }
    getBook();
  },[]);

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center ">
        <h1 className="text-2xl md:text-4xl"> We&apos;re Delighted to have you <span className="text-pink-500"> Here!</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque minima amet nostrum sit doloribus, perferendis, omnis voluptas cum est ducimus explicabo commodi quisquam eum nam sequi consectetur corporis quidem obcaecati.
          Ullam repellat doloribus, culpa odio, quam maxime maiores est esse dolor vitae architecto! Explicabo maiores at culpa minus voluptates, eius nobis provident reprehenderit. Voluptate dolores, ipsa amet sed reiciendis non?
          Consequuntur, quasi. Totam facilis dolor nam earum ea, beatae atque commodi deleniti velit officiis itaque non numquam doloremque id, blanditiis quaerat et iure esse, vero illo sequi sit aperiam excepturi!
        </p>
        <Link to="/">
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
        </Link>

      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))


        }
      </div>
    </div>
    </>
  )
}

export default Course;

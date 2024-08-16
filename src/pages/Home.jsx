import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/machines?page=1&limit=10")
        .then(res => res.json())
        .then(data => {
           setData(data.results)
        });
    }, [])
   console.log("asdas");
   
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-20">
     {
       data.length && data.map((item) => {
           return (
            <img src={item.image} alt="" />
           )
        })
     }
    </div>
  );
}

export default Home;

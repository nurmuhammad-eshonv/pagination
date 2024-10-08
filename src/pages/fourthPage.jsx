import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function fourthPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/machines?page=1&limit=100")
        .then(res => res.json())
        .then(data => {
            const imagesAfterTwenty = data.results.slice(80);
            setData(imagesAfterTwenty);
        });
    }, []);

    console.log("dasdas");

    return (
        <div className="flex flex-wrap justify-center gap-10 mt-20">
            {
                data.length > 0 && data.map((item, index) => (
                    <img key={index} src={item.image} alt={`Machine ${index + 21}`} />
                ))
            }
        </div>
    );
}

export default fourthPage;

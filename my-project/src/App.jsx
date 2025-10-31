import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
      setdata(data.data);
    });
  }, []);

  let count = 7

  return (
    <div className={`p-4 grid grid-cols-3 gap-3`}>
      {data.slice(0, 10).map((item) =>
      
      (
        <div className="border-2 border-blue-400 p-6 mb-3 rounded-xl" key={item.id}>
          <h1>{item?.title}</h1>
          <p>{item.body}</p>
        </div>
      )
      )}
    </div>
  );
}

export default App
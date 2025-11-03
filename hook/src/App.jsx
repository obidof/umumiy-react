import React, { useState } from 'react'
import { useGetuser } from "./hooks/getuser";
import Loader from "./Loader";

function App() {

  const { users, loading } = useGetuser();
  
  const [post, SetPost] = useState(2);
  console.log(post);
  
  if (loading) return <Loader count={8} grid={4} />;

  return (
    <div className='m-4 grid grid-cols-3 gap-4'>
      {users?.slice(0, post)?.map((item) => (
        <div className='border-2 border-blue-400 p-3 mt-5' key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}

      <button className='bg-blue-400 h-49 mt-5' onClick={() => SetPost(post + 2)}>
          yana yuklash
      </button>
    </div>
  )
}

export default App

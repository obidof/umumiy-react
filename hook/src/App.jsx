import React, { useState } from 'react'
import { useGetuser } from "./hooks/getuser";

function App() {

  const { users } = useGetuser();
  console.log(users);


  return (
    <div>
      {users?.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default App

import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./redux/slice/todoSlice"

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("state", state);

  if (state.todo.isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <>

      <button onClick={(e) => dispatch(fetchTodo())}>Fetch Todo</button>

      <div style={{ padding: "20px", border: "2px solid #fff", borderRadius: "20px", marginTop: "20px" }}>
        <ul>
          {state.todo.data && state.todo.data.slice(0, 20).map((e, i) => (
            <li style={{ paddingBottom: "10px", textAlign: "left" }} key={i}>
                {e.title}
              </li>
          )) }
        </ul>
      </div>


    </>
  )
}

export default App

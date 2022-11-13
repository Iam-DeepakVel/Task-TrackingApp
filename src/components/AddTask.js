import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remainder, setRemainder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if(!text){
      alert('Please add a task')
      return
    }
    
    //Passes value to App.js 
    onAdd({text,day,remainder})

    //After passing empty the fields
    setText('')
    setDay('')
    setRemainder(false)
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-full items-center justify-center pt-12"
    >
      <h2 className="font-bold text-3xl text-center mr-20  mb-4">ADD TASK</h2>
      <div className="w-1/2 sm:col-span-2 sm:mt-0">
        <div className="flex max-w-lg border-4 p-3 rounded-md shadow-sm">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            name="text"
            placeholder="Enter Task"
            id="text"
            autoComplete="username"
            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex max-w-lg mt-4 border-4 p-3 rounded-md shadow-sm">
          <input
            value={day}
            onChange={(e) => setDay(e.target.value)}
            type="text"
            name="text"
            id="text"
            placeholder="Enter Date & Time"
            autoComplete="username"
            className="block w-full min-w-0 flex-1 
                     rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex max-w-lg mt-4 border-4 p-3 rounded-md shadow-sm">
          <span className="inline-flex items-center rounded-md   bg-gray-200 p-1 text-gray-800 sm:text-sm">
            Set Remainder
          </span>
          <input
            id="candidates"
            aria-describedby="candidates-description"
            name="tasks"
            value={remainder}
            checked={remainder}
            onChange={(e) => setRemainder(e.currentTarget.checked)}
            type="checkbox"
            className="ml-6 mt-[5px] h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        mt-6 ml-40"
        >
          ADD TASK
        </button>
      </div>
    </form>
  );
};

export default AddTask;

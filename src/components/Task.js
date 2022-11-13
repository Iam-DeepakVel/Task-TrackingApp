import React from "react";
import {FaTimes} from 'react-icons/fa'


const Task = ({ id, task, date,onDelete,remainder,onToggle }) => {
  return (
    <div>
      <div
        onDoubleClick={()=>onToggle(id)}
        key={id}
        className={`flex flex-col py-4 px-5 w-full mb-3 bg-gray-300 rounded-lg font-bold ${remainder? 'border-l-8 border-l-green-600' :''}`}
      >
        <div>
        <div className="flex flex-row justify-between items-center  w-full">
        <h2>{task}</h2> <FaTimes onClick={()=>onDelete(id)} size={24} style={{color:'red',cursor:'pointer'}}/></div>
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Task;

import React from "react";
import Task from "./Task";

const Tasks = ({tasks,onDelete,onToggle}) => {
  

  return (
    <>
      <div className="mt-20">
        <div className="flex flex-col w-1/2 border-4 border-b-cyan-300 border-l-lime-300 border-t-violet-600 border-r-red-400 rounded-lg  p-4 mx-auto">
          {tasks.map((item) => {
            return(
              <Task id={item.id} task={item.task} date={item.date}  remainder={item.remainder} onDelete={onDelete} onToggle={onToggle}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tasks;

import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [edit, setEdit] = useState(null)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);  
  

  const handleChange = (e) => {
    if (e.key=== "Enter") {
      setTask(e.target.value)
      console.log(e.target.value)
      handleSave();
    }
    setTask(e.target.value)
    console.log(e.target.value)
  }

  const handleSave = () => {
    if (edit != null) {
      const updatedTasks = tasks.map((t, i) => i === edit ? { ...t, text: task } : t);
      setTasks(updatedTasks);
      setEdit(null);
    } else {
      setTasks([...tasks, { text: task, completed: false }])
    }
    setTask("")
  }

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks)
  }


  const handleEdit = (item, index) => {
    setTask(item.text)
    setEdit(index)
  }

  const handleDelete = (index) => {
    let updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Navbar />
      <div className="headings flex justify-center items-center my-5">
        <div className="heading text-4xl font-semibold mx-15">MyTask - One Stop to all your tasks</div></div>
      <div className="tasks my-15 min-h-[60vh] bg-slate-900 mx-auto w-[90%] sm:w-1/2 rounded-xl overflow-hidden">
        <div className="input p-1 sm:p-5 flex justify-center items-center">
          <input type="text" value={task} onChange={handleChange} className="rounded-md sm:w-[75%] border border-1-white min-w-30 flex-grow overflow-auto w-auto px-3 mx-2"/>
          <button onClick={handleSave}  disabled={task.length === 0} className="cursor-pointer bg-white rounded-full w-25 sm:w-20 text-black transition-transform duration-300 active:scale-95 shadow-gray-300 font-semibold my-4 sm:my-0">Save</button></div>

        {tasks.map((item, index) => (
          <div key={index} className="myTasks flex items-center px-2 sm:px-4 w-full"> <input type="checkbox" checked={item.completed} onChange={() => toggleCompletion(index)} className="flex-shrink-0"  />
          
            <div className={`kaam flex-grow px-2 py-1 overflow-hidden ${item.completed ? "line-through text-gray-500" : "text-white"
                }`} >
              {item.text} </div>

            <button
              onClick={() => handleEdit(item, index)} className="cursor-pointer bg-white rounded-full text-black transition-transform duration-300 active:scale-95 my-2 flex justify-center items-center flex-shrink-0 w-auto min-w-[40px] h-6 px-2 mx-2"  >
              <FaEdit /> </button>

            <button
              onClick={() => handleDelete(index)}  className="cursor-pointer bg-white rounded-full text-black transition-transform duration-300 active:scale-95 my-2 flex justify-center items-center flex-shrink-0 w-auto min-w-[40px] h-6 px-2"  >
              <AiFillDelete />
            </button>
          </div>
        ))}
      </div>

    </>
  )
}

export default App

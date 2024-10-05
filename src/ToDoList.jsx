import React , { useState } from "react"


function ToDoList(){
    const [tasks, setTasks] = useState(["Pet el gato", "Feed el gato", "Play with el gato"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){

        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask])
        setNewTask("")
        }
    }

    function deleteTask(id){
        const updatedTasks = tasks.filter((_, index) => index !== id)
        setTasks(updatedTasks)

    }

    function moveTaskUp(id){
        const updatedTasks = [...tasks]
        if(id > 0){
            //const updatedTasks = [...tasks]; <- this thing for some reason causes a crash IF YOU DONT PUT ; 
            //I NEED ; IN MY REACT PROJECT???
            
            [updatedTasks[id], updatedTasks[id-1]] = 
            [updatedTasks[id-1], updatedTasks[id]]
            setTasks(updatedTasks)

        }
    }

    function moveTaskDown(id){
        const updatedTasks = [...tasks]
        if(id < tasks.length-1){
            //const updatedTasks = [...tasks]; <- this thing for some reason causes a crash IF YOU DONT PUT ; 
            //I NEED ; IN MY REACT PROJECT???
            
            [updatedTasks[id], updatedTasks[id+1]] = 
            [updatedTasks[id+1], updatedTasks[id]]
            setTasks(updatedTasks)

        }
    }


    return (<>
    
    <div className="to-do-list">

        <h1>To-Do-List</h1>
        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}
            />
            <button
                className="add-todo-button"
                onClick={addTask}
            >
                Add Task
            </button>
        </div>

        <ol>
            {tasks.map((task, id) => 
            
            <li key = {id}>
                <span className="todo-text">{task}</span>
                <button 
                    className="delete-todo-button"
                    onClick={() => deleteTask(id)}
                >
                    Delete?
                </button>
                <button
                    className="move-todo-up-button"
                    onClick={() => moveTaskUp(id)}
                >Up?</button>
                <button
                    className="move-todo-down-button"
                    onClick={() => moveTaskDown(id)}
                >Down?</button>
            </li>
            
            )}
        </ol>

    </div>
    
    </>)
}

export default ToDoList
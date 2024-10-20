import React, { useState } from 'react';


function ToDoList() {
    const [tasks, setTasks] = useState([
        { text: 'Eat Breakfast', completed: false },
        { text: 'Warm up', completed: false },
        { text: 'Done work', completed: false }
    ]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddTask() {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    }
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    }

    function handleDeleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function handleMoveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }

    function handleMoveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
            setTasks(updatedTasks);
        }
    }

    function toggleTaskCompletion(index) {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    }

    return (
        <div className='to-do-list'>
            <h1>TO-DO List</h1>
            <div>
                <input
                    type="text"
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} 
                />
                <button className='add-button' onClick={handleAddTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(index)}
                        />
                        <span className={`text ${task.completed ? 'completed' : ''}`}>
                            {task.text}
                        </span>
                        <button className='delete-task' onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button className='move-task' onClick={() => handleMoveTaskUp(index)}>Up</button>
                        <button className='move-task' onClick={() => handleMoveTaskDown(index)}>Down</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;






























// import React, {useState} from 'react';
// function ToDoList(){
//     const[tasks, setTasks] = useState(['Eat Breakfast', 'warm up' ,'done work']);
//     const[newTask, setNewTask] = useState('');

//     function handleInputChange(event){
//         setNewTask(event.target.value);

//     }
//     function handleAddTask(){

//     }
//     function handleDeleteTask(index){

//     }
//     function handleMoveTaskUp(index){
        
//     }
//     function handleMoveTaskDown(index){

//     }

//     return(<div className='to-do-list'>

//         <h1>TO-DO-List</h1>
//         <div>
            
//         <input type="text" placeholder='Enter a task..' value={handleInputChange}/>
//         <button className='add-button' onClick={handleAddTask}>Add</button>

//     </div>
    
//         <ol>
//             {tasks.map((task, index)=> 
//             <li key={index}>
//                 <span className='text'>{task} </span>
//                 <button className='delete-task'
//                 onClick={() => handleDeleteTask(index)}>Delete</button>
//             </li>)}
        
//         </ol>
//     </div>
//     );

// }
// export default ToDoList;
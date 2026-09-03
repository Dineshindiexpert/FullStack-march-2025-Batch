import { useReducer, useState } from "react";

export default function TodoList() {  

    const [tasklist, dispatch] = useReducer((state, action) => {
        console.log(action.type);
        switch (action.type) {
           
            case "ADD_TASK":
                return [...state, { text: action.taskname, completed: false }];
            case "TOGGLE_TASK":
                
        
                return state.map((task, index) =>
                    index === action.index ? { ...task, completed: !task.completed } : task
                );
               
            default:
                return state;
        }
            
    }, []);  
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (inputValue.trim()) {
            dispatch({ type: "ADD_TASK", taskname: inputValue });
            setInputValue(""); 
        }
    };

    return (
        <div className="container">
            <div className="card" style={{ maxWidth: "100%" }}>
                <div className="card-header  text-center">
                    <h1>To-Do List</h1>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"placeholder="Enter task..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                        <button className="btn btn-lg btn-primary" onClick={addTask}>ADD</button>
                    </div>
                    
                    
                    {tasklist.length === 0 ? (<p className="text-center text-white">No tasks added yet!</p>) : (
                        <ul className="list-group">
                            {tasklist.map((task, index) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                    <div className="d-flex align-items-center">
                                        <input className="form-check-input me-2" type="checkbox" checked={task.completed}
                                            onChange={() => dispatch({ type: "TOGGLE_TASK", index })}/>
                                        <span style={{ textDecoration: task.completed ? "line-through" : "none"}}>{task.text}</span>
                                    </div>
                                    <button className="btn btn-lg btn-outline-danger" onClick={() => dispatch({ type: "TOGGLE_TASK", index })}>romove</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

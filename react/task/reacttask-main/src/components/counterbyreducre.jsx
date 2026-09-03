import React, { useReducer } from "react";

const Counterbyreduce = () => {
   
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                if (state >= 10) {
                    alert("Can't be more than 10");
                    return state;
                }
                return state + 1;
            case "DECREMENT":
                if (state <= 0) {
                    alert("Can't be negative");
                    return state;
                }
                return state - 1;
            default:
                return state;
        }
    };

     
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div className="d-flex flex-column justify-content-center m-5">
            <h1>counter by reducer</h1>
            <h1 className="text-center my-4 text-white bg-primary p-5 rounded-2">Current value of count = {count}
            </h1>
            <div className="d-flex justify-content-center gap-5">
                <button 
                    className="btn btn-success p-4 fs-3" 
                    onClick={() => dispatch({ type: "INCREMENT" })}
                >
                    Increment
                </button>
                <button 
                    className="btn btn-danger p-4 fs-3" 
                    onClick={() => dispatch({ type: "DECREMENT" })}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counterbyreduce;

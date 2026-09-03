import React, { useState } from "react";

const Counter = () => {
    
    const [count, setCount] = useState(10);

     
    const handleIncrement = () => {
        if (count>=10){
            alert("can't be more than 10")
            return count;
        }
        setCount(count + 1);

    };
    const handleDecrement = () => {
        if (count < 1) {
            alert("can't be negative");
        } else {
            setCount(count - 1);
        }
    };

    return (
        <>
            <div className="d-flex flex-column justify-content-center m-5 ms-5">
                <h1>counter by the usestate</h1>
                <h1 className="text-center my-4 text-white bg-primary p-5 rounded-2">
                    Current value of count = {count}
                </h1>
                <div className="d-flex justify-content-center gap-5">
                    <div>
                        <button className="btn btn-success p-4 fs-3" onClick={handleIncrement}>Increment</button>
                    </div>
                    <div>
                        <button className="btn btn-danger p-4 fs-3" onClick={handleDecrement}>Decrement</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Counter;

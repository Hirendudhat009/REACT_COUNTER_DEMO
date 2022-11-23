import React, { useState, useEffect } from 'react'


const useCounter = (forwrds = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwrds) {
                setCounter((prevCounter) => prevCounter + 1);
            }
            else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return counter;
}

export default useCounter;
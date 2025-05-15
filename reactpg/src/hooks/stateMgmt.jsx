import { useState } from "react";


const stateMgmt = () => {
    const [number,incNumber] = useState(0);
    //use stateReducer and populate it

    return(
        <div>
            conatins state management hooks

            use state value: {number}
            <button onClick={()=>incNumber(number+1)}>increase</button>
            <button onClick={()=>incNumber(0)}>reset</button>
        </div>
    )
}

export default stateMgmt;
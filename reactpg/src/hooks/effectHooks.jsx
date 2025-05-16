import { useEffect, useState } from "react";

const effectHooks= () => {

    const [number,inc]= useState(0);

    //use effect updates upon a change in the variable
    useEffect(()=>{
        document.title='number state:'+number;
    },[number])

    return(
        <div>
            This section contains effect Hooks

            <button onClick={()=>inc(number+1)}>press to increase on title</button>
        </div>
    )
}

export default effectHooks;
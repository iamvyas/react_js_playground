import { useReducer, useState } from "react";


const stateMgmt = () => {
    const [number,incNumber] = useState(0);
    //use stateReducer and populate it
    const reducerfn=(state,action) =>{
        switch(action){
            case 'a':
                return "north"  //returns state
            case 'b':
                return "south"
            case 'c':
                return "east" 
            case 'd':
                return "west"   
        }
    }
    const [state,dispatch] = useReducer(reducerfn,"null");

    return(
        <div>
            conatins state management hooks
            <div>
                use state value: {number}
                <button onClick={()=>incNumber(number+1)}>increase</button>
                <button onClick={()=>incNumber(0)}>reset</button>
            </div>
            <div>
                use reducer value: {state}
                <button onClick={()=>dispatch('a')}>show north</button>
                <button onClick={()=>dispatch('b')}>show south</button>
                <button onClick={()=>dispatch('c')}>show east</button>
                <button onClick={()=>dispatch('d')}>show west</button>

            </div>
            
        </div>
    )
}

export default stateMgmt;
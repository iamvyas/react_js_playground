import { Routes, Route } from 'react-router-dom';
import StateMgmt from './stateMgmt';
import EffectHooks from './effectHooks'
import { Link } from 'react-router-dom';

const hooksBasic = () =>{
    return(
        <div>
            this is hooks section<br></br>
            <Link className="text-white" to="stateMgmt">state management</Link>
            <Link className="text-white" to="effectHooks">Effect Hooks</Link>
            <Routes>
                <Route path="/stateMgmt" element={<StateMgmt />} /> 
                <Route path="/effectHooks" element={<EffectHooks />} /> 
            </Routes>
        </div>
    )
}

export default  hooksBasic;
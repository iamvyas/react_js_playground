import { Routes, Route } from 'react-router-dom';
import StateMgmt from './stateMgmt';
import { Link } from 'react-router-dom';

const hooksBasic = () =>{
    return(
        <div>
            this is hooks section
            <Link className="text-white" to="stateMgmt">state management</Link>
            <Routes>
                <Route path="/stateMgmt" element={<StateMgmt />} />
            </Routes>
        </div>
    )
}

export default  hooksBasic;
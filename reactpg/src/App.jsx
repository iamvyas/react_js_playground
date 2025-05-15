import './App.css'
import Hooks from "./hooks/hooksBasic"
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
        REACT PLAY GROUND<br></br>
        <Link className="text-white" to="Hooks">hooks</Link>
    </div>
      <Routes>
        <Route path="/hooks/*" element={<Hooks />} />
      </Routes>
    </>
  )
}

export default App

/* 
<Route path="/hooks/*" element={<Hooks />} /> the star enables extending nested routing
*/
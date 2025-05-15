import './App.css'
import Hooks from "./hooks/hooksBasic"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
        REACT PLAY GROUND
    </div>
      <Routes>
        <Route path="/hooks" element={<Hooks />} />
      </Routes>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import Detail from "./components/Detail"

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="register/*" element={<Register/>} />
        <Route path="dashboard/*" element={<Dashboard/>} />
        <Route path="dashboard/detail/*" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

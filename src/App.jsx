import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import './App.css'

function App() {
 

  return (
    
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Nav />} />
     </Routes>
     </BrowserRouter>
 
  )
}

export default App

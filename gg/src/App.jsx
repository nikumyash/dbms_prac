import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import IndexElem from './IndexElem'
import Success from './Success'

function App() {
  return (
    <>
    <BrowserRouter>
    <h1><a href="/">Home</a></h1>
      <Routes>
        <Route index element={<IndexElem/>} />  
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import './App.css';
import { Login } from './Login/Login'
import { Signup } from './Signup/Signup'
import { Reset } from './Reset/Reset'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Login /> }></Route>
        <Route path='/signup' element={ <Signup /> }></Route>
        <Route path='/reset_password' element={ <Reset /> }></Route>
      </Routes>
    </div>
  );
}

export default App;

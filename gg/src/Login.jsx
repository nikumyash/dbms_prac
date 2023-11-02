import { useState } from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
    const [uname,setUname] = useState("");
    const [pass,setPass] = useState("");
    const [error,setError] = useState("");
    const navigateTo = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();   
        const fdata = {uname,pass};
        console.log(fdata);
        axios.post("http://localhost:3000/login",{uname,pass}).then((d)=>navigateTo('/success')).catch(e=>setError(e.response.data.message));
    }
  return (
    <div> 
        {error && <h1>{error}</h1>}
        <section className="container">
            <div className="login-container">
                <div className="circle circle-one"></div>
                <div className="form-container">
                    <h1 className="opacity">LOGIN</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={(e)=>setUname(e.target.value)} placeholder="USERNAME" />
                        <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="PASSWORD" />
                        <button className="opacity" type='submit'>SUBMIT</button>
                        <div className="register-forget opacity">
                            <a href="/register">REGISTER</a>
                        </div>
                    </form>
                </div>
                <div className="circle circle-two"></div>
            </div>
            <div className="theme-btn-container"></div>
        </section>
    </div>
  )
}

export default Login
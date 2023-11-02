import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [uname,setUname] = useState("");
    const [pass,setPass] = useState("");
    const [aId,setAid] = useState("");
    const [error,setError] = useState("");
    const navigateTo = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();   
        const fdata = {uname,pass,aId};
        console.log(fdata);
        axios.post("http://localhost:3000/register",{uname,pass,aId}).then((d)=>navigateTo('/success')).catch(e=>setError(e.response.data.message));
    }
  return (
    <div>
        {error && <h1>{error}</h1>}
        <section className="container">
    <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="form-container">
            <h1 className="opacity">Register User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="USERNAME" onChange={(e)=>setUname(e.target.value)} required/>
                <input type="password" placeholder="PASSWORD" onChange={(e)=>setPass(e.target.value)} required/>
                <input type="text" placeholder="AADHAAR ID" onChange={(e)=>setAid(e.target.value)} required/>
                <button type="submit" className="opacity" id="submitter">REGISTER</button>
                <div className="abc">
                    <a href="/login">GO TO LOGIN PAGE</a>
                </div>
            </form>
        </div>
        <div className="circle circle-two"></div>
    </div>
    <div className="theme-btn-container"></div>
</section></div>
  )
}

export default Register
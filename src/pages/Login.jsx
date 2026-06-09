import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import { Authcontext } from '../App';

const Login = () => {
    const [frmdata,setFrmdata]=useState({})
    // const [data,setdata]=useState([])
    const navigate =useNavigate()
    const {login,setLogin}=useContext(Authcontext)
    

    function store(event){
        const {name,value}= event.target
        setFrmdata({...frmdata,[name]:value})
    }

    function submit(e){
        e.preventDefault()
        console.log(frmdata);
        // setdata([...data,frmdata])
        let data= localStorage.getItem('signkey')
        let data2=JSON.parse(data)
        console.log(data2);
        
        if(frmdata.username === data2.username && frmdata.email === data2.email){
                    console.log('hi');
                    navigate('/')
        }
        else{
          alert('user not found......')
        }
    }

  return (
    <>
    <div className="frmcontainer">
    <Modal show={login} onHide={() => setLogin(false)}>

        <div className="frmbox login">
             <form action="" onSubmit={submit}>
      <h1>Login </h1>
      <div className="inputs">
                <input type="text"
                 name='username' 
                 onChange={store} 
                 placeholder='username'
                 required />
                 <i class="fa-solid fa-user" ></i>
                 <br />
        
         </div>
         <div className="inputs">
            <input type="text" 
        name='email' 
        onChange={store} 
        placeholder='email'
        required />
        <i class="fa-solid fa-lock"></i>
        <br />
         </div>

        <div className="forget">
            <label ><input type="checkbox"
             name="access"
             required /> Remember me</label>
             <Link className='forgetlink'>Forget Password?</Link>
            </div> 
            <div className="frmbtn">
        <input type="submit" value="submit"  />
            </div>
        <div className="forsignup">
            <p>Don't have an account? <Link to='/signup' className='forgetlink'>Signup</Link></p>
        </div>
     
        
     </form>
        </div>
    </Modal>

    </div>
    </>
  )
}
export default Login
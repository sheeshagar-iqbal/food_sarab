import React, { useContext, useState } from 'react'
import {  Link,useNavigate } from 'react-router-dom'
import { Authcontext } from '../App'
import Modal from "react-bootstrap/Modal";
import { toast } from 'react-toastify';

const Signup = () => {
    const [frmdata,setFrmdata]=useState({})
    // const [data,setdata]=useState([])
    const navigate=useNavigate()
    const {signup,setSignup,setLogin}=useContext(Authcontext)
    

    function store(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setFrmdata({...frmdata,[name]:value})
    }

    function submit(e){
        e.preventDefault()
        console.log(frmdata);
        // setdata([...data,frmdata])
        localStorage.setItem('signkey',JSON.stringify(frmdata))
        // console.log(data);
        toast.success('Signup Successfully!');
        setLogin(true)
        setSignup(false)
        // navigate('/login')
        
    }

  return (
    <>

  { signup &&
   <div className="frmcontainer">
    <Modal show={signup} onHide={() => setSignup(false)}>

        <div className="frmbox login">
             <form action="" onSubmit={submit}>
      <h1>SignUp </h1>
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
                <input type='email'
                 name='email' 
                 onChange={store} 
                 placeholder='email'
                 required />
                 <i class="fa-solid fa-user" ></i>
                 <br />
        
         </div>
         <div className="inputs">
            <input type="password" 
        name='password' 
        onChange={store} 
        placeholder='password'
        required />
        <i class="fa-solid fa-lock"></i>
        <br />
         </div>

        <div className="forget">
            <label >
            <input type="checkbox"
             name="access"
             onClick={store}
             required />I agree to Term and Condition</label>
            
            </div> 
            <div className="frmbtn">
        <input type="submit" value="submit"  />
            </div>
        <div className="forsignup">
            <p>Already have an account? <Link to='/login' className='forgetlink'>Login</Link></p>
        </div>
     
        
     </form>
        </div>
    </Modal>

    </div>}
    
    </>
  )
}

export default Signup
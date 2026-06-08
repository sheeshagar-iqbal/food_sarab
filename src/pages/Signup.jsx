import React, { useState } from 'react'
import {  Link,useNavigate } from 'react-router-dom'

const Signup = () => {
    const [frmdata,setFrmdata]=useState({})
    // const [data,setdata]=useState([])
    const navigate=useNavigate()

    function store(event){
        const {name,value}= event.target
        setFrmdata({...frmdata,[name]:value})
    }

    function submit(e){
        e.preventDefault()
        console.log(frmdata);
        // setdata([...data,frmdata])
        localStorage.setItem('signkey',JSON.stringify(frmdata))
        navigate('/login')
        
    }

  return (
    <>
   <div className="frmcontainer">
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
    </div>
    
    </>
  )
}

export default Signup
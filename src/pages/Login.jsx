import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import { Authcontext } from '../App';
import { toast } from 'react-toastify';

const Login = () => {
    const [frmdata,setFrmdata]=useState({})
    // const [data,setdata]=useState([])
    const navigate =useNavigate()
    const {login,setLogin,setAuth}=useContext(Authcontext)
    

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
        let data= localStorage.getItem('signkey')
        let data2=JSON.parse(data)
        console.log(data2);
        
        if(frmdata.email === data2.email && frmdata.email === data2.email){
                    // console.log('hi');
                    toast.success('Login Successfully!');
                    setLogin(false)
                    setAuth(true)
                    // navigate('/')

        }
        else{
        //   alert('user not found......')
                toast.warning('user not found......');
        
        }
    }

  return (
    <>
    { login &&
     <div className="frmcontainer">
    <Modal show={login} onHide={() => setLogin(false)}>

        <div className="frmbox login">
             <form action="" onSubmit={submit}>
      <h1>Login </h1>
      <div className="inputs">
                <input type="email"
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

    </div>}
    </>
  )
}
export default Login
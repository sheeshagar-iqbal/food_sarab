import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import React, { useEffect ,useState } from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify'



const ReservationShow = () => {
    const [user, setUsers] = useState([]);
    const [shwfrm ,setShwfrm]= useState(false)
    const navigate= useNavigate()
    const [singleuser,setSingleuser]=useState()

   const store =(e)=>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setSingleuser(values => ({...values, [name]: value}))
   }
   
    const handleupdate=(rowData)=>{
             setSingleuser(rowData)
             

   }
   const handlesubmit =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/reservation/${singleuser.id}`,singleuser)
        .then((res)=>console.log('edit success'))
        .then(()=>toast('data update sucessfully'))
        setShwfrm(false)
   }
   const handledelete=(id)=>{
    axios.delete(`http://localhost:3000/reservation/${id}`)
    .then(()=>console.log(`delete ${id}`))
    .then(()=>toast('data delete sucessfully'))
    .catch((err)=>console.log(err))
    
  }

    useEffect(()=>{
    axios.get('http://localhost:3000/reservation')
    .then((res)=> setUsers(res.data) )
    .catch((err)=>console.log(err))

  },[handledelete])


  const actiontemplate= (rowData)=>(
   

    <>
   <div className="flex">
     <Button icon='pi pi-pencil' className="p-button-sm p-button-warning m-2" onClick={()=>(setShwfrm(!shwfrm),handleupdate(rowData))}/>
    <Button icon='pi pi-trash' className="p-button-sm p-button-warning m-2" onClick={()=>handledelete(rowData.id)} />
   </div>
    </>
  )
  return (
    <> 
    <div className="flex justify-end align-bottom p-3" style={{marginTop:'100px'}}>
        {/* <h1>user list</h1> */}
      <Button label="Back" icon='' size="small" onClick={()=>navigate('/')}/>
      </div>

     <DataTable value={user} showGridlines stripedRows paginator rows={5} size="small" filterDisplay="row">
        <Column field="name" header="Name" filter filterPlaceholder="Search" ></Column>
        <Column field="number" header="Number" filter filterPlaceholder="Search" ></Column>
        <Column field="email" header="Email" filter filterPlaceholder="Search" ></Column>
        <Column field="guests" header="Guests" filter filterPlaceholder="Search" ></Column>
        <Column field="date" header="Date" filter filterPlaceholder="Search" ></Column>
        <Column field="time" header="Time" filter filterPlaceholder="Search" ></Column>
        <Column field="specialRequest" header="SpecialRequest" filter filterPlaceholder="Search" ></Column>
        <Column  header="Action" body={actiontemplate} ></Column>
        
      </DataTable>



      {shwfrm &&   <div className="resformcard">
        <form onSubmit={handlesubmit} >
            <div className="resformgrid">
                <div className="resfield">
                    <label>Full Name *</label>
                    <input type="text" placeholder="John Doe" value={singleuser.name} name='name' onChange={store}/>
                </div>

                <div className="resfield">
                    <label>Phone Number *</label>
                    <input type="text" placeholder="+1 (800) 000-0000" value={singleuser.number} name='number' onChange={store}/>
                </div>

                <div className="resfield">
                    <label>Email Address *</label>
                    <input type="email" placeholder="you@email.com" value={singleuser.email} name='email' onChange={store}/>
                </div>

                <div className="resfield">
                    <label>Number of Guests *</label>
                    <select  value={singleuser.guests} name='guests' onChange={store}>
                        <option value={1}>1 Person</option>
                        <option value={2}>2 Person</option>
                        <option value={4}>4 Person</option>
                        <option value={10}>10 Person</option>
                        <option value='more'>more Person</option>
                    </select>
                </div>

                <div className="resfield">
                    <label>Date *</label>
                    <input type="date" value={singleuser.date} name='date' onChange={store}/>
                </div>

                <div className="resfield">
                    <label>Time *</label>
                    <select value={singleuser.time} name='time' onChange={store}>
                        <option value='9am' >09:00 AM</option>
                        <option value='10am' >10:00 AM</option>
                        <option value='11am' >11:00 AM</option>
                        <option value='12am' >12:00 AM</option>
                        <option value='1pm' >01:00 PM</option>
                        <option value='2pm' >02:00 PM</option>
                        <option value='3pm' >03:00 PM</option>
                        <option value='4pm' >04:00 PM</option>
                        <option value='5pm' >05:00 PM</option>
                        <option value='6pm' >06:00 PM</option>
                        <option value='7pm' >07:00 PM</option>
                        <option value='8pm' >08:00 PM</option>
                        <option value='9pm' >09:00 PM</option>
                        <option value='10pm' >10:00 PM</option>
                        
                    </select>
                </div>
            </div>

            <div className="resfield">
                <label>Special Requests</label>
                <textarea placeholder="Allergies, dietary needs, special occasions..." value={singleuser.specialRequest} name='specialRequest' onChange={store}></textarea>
            </div>

            <button className="resbtn" type="submit">
                Confirm Reservation
            </button>
        </form>
    </div>
    }
    
    </>
  )
}

export default ReservationShow
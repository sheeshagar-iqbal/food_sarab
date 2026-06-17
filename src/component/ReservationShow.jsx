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



const ReservationShow = () => {
    const [user, setUsers] = useState([]);
    const [shwfrm ,setShwfrm]= useState(false)
    const navigate= useNavigate()
    const [singleuser,setSingleuser]=useState()

   const handleupdate=(rowData)=>{
             setSingleuser(rowData)

   }

    useEffect(()=>{
    axios.get('http://localhost:3000/reservation')
    .then((res)=> setUsers(res.data) )
    .catch((err)=>console.log(err))

  },[onsubmit])


  const actiontemplate= (rowData)=>(
   

    <>
   <div className="flex">
     <Button icon='pi pi-pencil' className="p-button-sm p-button-warning m-2" onClick={()=>(setShwfrm(!shwfrm),handleupdate(rowData))}/>
    <Button icon='pi pi-trash' className="p-button-sm p-button-warning m-2" />
   </div>
    </>
  )
  return (
    <> 
    <div className="flex justify-end align-bottom p-3 ">
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
        <form >
            <div className="resformgrid">
                <div className="resfield">
                    <label>Full Name *</label>
                    <input type="text" placeholder="John Doe" value={singleuser.name}/>
                </div>

                <div className="resfield">
                    <label>Phone Number *</label>
                    <input type="text" placeholder="+1 (800) 000-0000" value={singleuser.number}/>
                </div>

                <div className="resfield">
                    <label>Email Address *</label>
                    <input type="email" placeholder="you@email.com" value={singleuser.email}/>
                </div>

                <div className="resfield">
                    <label>Number of Guests *</label>
                    <select  value={singleuser.guests}>
                        <option value={1}>1 Person</option>
                        <option value={2}>2 Person</option>
                        <option value={4}>4 Person</option>
                        <option value={10}>10 Person</option>
                        <option value='more'>more Person</option>
                    </select>
                </div>

                <div className="resfield">
                    <label>Date *</label>
                    <input type="date" value={singleuser.date}/>
                </div>

                <div className="resfield">
                    <label>Time *</label>
                    <select value={singleuser.time}>
                        <option>09:00 AM</option>
                    </select>
                </div>
            </div>

            <div className="resfield">
                <label>Special Requests</label>
                <textarea placeholder="Allergies, dietary needs, special occasions..." value={singleuser.specialRequest}></textarea>
            </div>

            <button className="resbtn" type="button">
                Confirm Reservation
            </button>
        </form>
    </div>
    }
    
    </>
  )
}

export default ReservationShow
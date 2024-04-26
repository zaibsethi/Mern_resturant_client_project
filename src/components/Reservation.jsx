import React from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Reservation() {
    const [firstName, setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState(null); // State to hold error message


  const navigate = useNavigate();

  const handleReservation = async (e)=>{
    e.preventDefault();

    try {
         const { data } = await axios.post("http://localhost:4000/api/v1/reservation/send",
            { firstName,lastName ,email,date,time,phone },
            {
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials: true
            }
         )
         toast.success(data.message)
         setFirstName("");
         setLastName("");
         setPhone(0)
         setEmail("")
         setTime("")
         setDate("")
         navigate("/success")

    } catch (error) {
      //  const setError = toast.error(error.response.data.message) // for toast error
       setError(error.response.data.message || "An error occurred"); // Set error state/ for displaying in form
      }

  }

  return (
    <section className='reservation' id='reservation'>
        <div className="container">
            <div className="banner">
            <img src="/reservation.png" alt='reservation' />
                
            </div>
            <div className="banner">
              <div className="reservation_form_box">
                <h1>MAKE A RESERVATION </h1>
                <p>Call for more details</p>
                <form>
                {error && <div style={{color:"red"}}>{error}</div>}

                   <div>
                    <input type='text' placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>

                    <input type='text' placeholder='Last Name' value={lastName } onChange={(e)=>setLastName(e.target.value)}/>
                   </div>

                   <div>
                    <input type='date' placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)}/>

                    <input type='time' placeholder='Time' value={time} onChange={(e)=>setTime(e.target.value)}/>
                   </div>

                   <div>
                    <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <input type='number' placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                   </div>
                   <button style={{cursor:"pointer"}} type='submit' onClick={handleReservation}>Reserve Now{" "} <span><HiOutlineArrowNarrowRight/></span> </button>


                </form>
              </div>


            </div>
        </div>
        </section>
  )
}

export default Reservation
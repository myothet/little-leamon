import {useState} from "react";
import Button from "./Button";


export default function BookingForm(props){

const [date,setDate]=useState("");
const [guest,setGuest]=useState(1);
const [time,setTime]=useState("");
const [occasion,setOccasion]=useState("");

const setGuestNumber=(event)=>{

   event.preventDefault();
   setGuest(event.target.value);
   
   
   
   }

const setResTime=(event)=>{

 event.preventDefault();
 setTime(event.target.value);

}

const setResDate=(event)=>{
event.preventDefault();
setDate(event.target.value);


}

const setResOccasion=(event)=>{

event.preventDefault();
setOccasion(event.target.value);



}

return(
    <div className="res-form">
    <form  style={{display: "grid", maxWidth:"200px", gap: "20px",position:"relative"}}>

<label for="res-date">Choose date</label>
   <input type="date" id="res-date" onchange={setResDate}/>
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      {props.availableTimes.map((time)=>(<option key={time}>{time}</option>))}
      
   </select>

   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={setGuestNumber}/>
   <label for="occasion">Occasion</label>
   <select id="occasion" onChange={setResOccasion}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
  
   <Button>Make Your reservation</Button>





    </form>
    </div>

)



}
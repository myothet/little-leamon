import {useState} from "react";
import Button from "./Button";


export default function BookingForm(props){

const [date,setDate]=useState("");
const [guest,setGuest]=useState(1);
const [time,setTime]=useState("");
const [occasion,setOccasion]=useState("");

const [formData, setFormData] = useState({
   date: "",
   time: "",
   guests: "",
   occasion: "",
 });



const setGuestNumber=(event)=>{

   event.preventDefault();
   setGuest(event.target.value);
   
   
   
   }
   const setBookingTime=(e)=>{

     setTime(e.target.value);

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

const handleDateChange = (event) => {
   const { name, value } = event.target;
   console.log("e.target is",event.target);
   const selectedDate = value;
   const date=new Date(selectedDate);
   
   props.dispath({ type: "update", payload: date });
   setFormData({
      ...formData,
      [name]: value,
    });
 };


 const handleChange = (e) => {
   const { name, value } = e.target;
   
   setFormData({
     ...formData,
     [name]: value,
   });
 };

 const handleSubmit = (e) => {
   e.preventDefault(); // Prevent the default browser behavior
  // console.log("Form submitted:", formData);
 props.submitForm(formData); 

 };

return(
    <div className="res-form">
    <form aria-labelledby="booking-form-header" onSubmit={handleSubmit} style={{display: "grid", maxWidth:"200px", gap: "20px",position:"relative"} }>

<label htmlFor="res-date">Choose date</label>
   <input type="date" name="date" id="res-date" onChange={handleDateChange} value={formData.date}/>
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time " name="time" onChange={handleChange} value={formData.time}>
      {props.availableTimes.map((time)=>(<option key={time}>{time}</option>))}
      
   </select>

   <label htmlFor="guests">Number of guests</label>
   <input type="number" name="guests" placeholder="1" min="1" max="10" id="guests" onChange={handleChange} value={formData.guests}/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" name="occasion" onChange={handleChange}  value={formData.occasion}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
  
   <Button>Make Your reservation</Button>





    </form>
    </div>

)



}
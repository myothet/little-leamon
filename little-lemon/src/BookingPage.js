import BookingForm from "./BookingForm";
import Main from "./Main";
import {useState} from "react";
import restaurant from"./asserts/littlelemon-restaurant.jpg";
import HeroSection from "./HeroSection";


export default function BookingPage(){
  const [availableTimes]=useState(["01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00"]);

  
return(

  <Main>
    <HeroSection>
    <article>
          <h1>

            Little Lemon
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p> 
          <p>sed do eiusmod tempor ,</p>
          <p>incididunt ut labore et dolore magna aliqua.</p>
       
          
         </article>
   

     <img src={restaurant} style={{width:"30%",height:"90%"}}/>
    
    
     </HeroSection>

    <BookingForm availableTimes={availableTimes}/>
  </Main>

)




}
import BookingForm from "./BookingForm";
import Main from "./Main";
import {useReducer} from "react";
import restaurant from"./asserts/littlelemon-restaurant.jpg";
import HeroSection from "./HeroSection";
import {fetchAPI,submitAPI} from "./api"
import { useNavigate } from "react-router-dom";

export const updateTime = (state, action) => {
  switch (action.type) {
      case "update":
          return fetchAPI(action.payload) // Example filtered times
      default:
          return state;
  }
};

 export function initializeTimes() {
  //const data=useEffect(fetchData(),[]);
  //return ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00"];
  const today = new Date();
  console.log(today);
  return fetchAPI(today);

}



export default function BookingPage(props){

  const navigate = useNavigate();


const[availableTimes,dispath]=useReducer(updateTime,[],initializeTimes);

const submitForm = async (formData) => {
  const isSuccessful = await submitAPI(formData); // Replace `submitAPI` with your actual API call

  if (isSuccessful) {
    navigate("/confirmed"); // Navigate to the confirmation page
  } else {
    console.error("Form submission failed");
  }
};

  
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

    <BookingForm availableTimes={availableTimes} dispath={dispath} submitForm={submitForm}/>
  </Main>

)




}
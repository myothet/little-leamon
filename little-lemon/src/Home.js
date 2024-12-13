
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import HightLight from "./HightLight";
import Card from "./Card";
import sausage from "./asserts/sausage.jpg";
import Button from "./Button";
import HightLightHeader from './HightLitghtHeader';
import HightLightCard  from "./HightLightCard";
import Main from "./Main";
import greek from "./asserts/greek-salad.jpg"
import delivery from "./asserts/delivery.jpg"
import bruchetta from "./asserts/bruchetta.jpg"
import pasta from "./asserts/pasta.jpg"
import cake from "./asserts/cake.jpg"
import BookingForm from "./BookingForm";
import BookingPage from "./BookingPage";
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const [showBookingForm, setShowBookingForm] = useState(false);
  const navigate = useNavigate();

  const setBookingCondition=()=>{
    console.log("clicked buton");
    navigate('/booking');

   // showBookingForm==true?setShowBookingForm(false):setShowBookingForm(true);

  }


  const loadForm=()=>{
    navigate('/booking');

  };

  const handleClick = () => {
    alert("Button clicked!");
  };



return(
    <>
    <Main>
    {showBookingForm && <BookingForm />}
    <HeroSection>
         <article>
          <h1>

            Little Lemon
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p> 
          <p>sed do eiusmod tempor ,</p>
          <p>incididunt ut labore et dolore magna aliqua.</p>
          <Button clicked={setBookingCondition} isdisable={false}>Reverse a Table</Button>
          
         </article>
         <article>
            <img  src={sausage} loading="lazy"/>

         </article>


    </HeroSection>
    <HightLight>
      <HightLightHeader/>
      <HightLightCard>
            <Card path={greek}  secondpath={delivery}
            subtitle="Greek Salad"
            price="12.00"
            text="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ">



            </Card>
            <Card path={bruchetta}  secondpath={delivery}
             subtitle="Bruchetta"
             price="12.00"
            
            text=" Our Bruschetta  is made from  grilled bread that has been smeared with garlic and  seasoned with salt and  olive oil. ">



              </Card>
              <Card path={cake}  secondpath={delivery} 
               subtitle="Lemon Dessert"
               price="12.00"
              
              text="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.">



                </Card>




            </HightLightCard>

    
    </HightLight>


  </Main>
  
  <Footer>
      
    
  </Footer>


</>



)







}
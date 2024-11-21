
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import HightLight from "./HightLight";
import Card from "./Card";
import sausage from "./asserts/sausage.jpg";
import Button from "./Button";
import HightLightHeader from './HightLitghtHeader';
import HightLightCard  from "./HightLightCard";
import Main from "./Main";

export default function Home(){

return(
    <>
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
          <Button>Reverse a Table</Button>
          
         </article>
         <article>
            <img  src={sausage}/>

         </article>


    </HeroSection>
    <HightLight>
      <HightLightHeader/>
      <HightLightCard>
            <Card path={sausage} text="the fauous greek slag is spicy and tasty.It's mixture of Europian and Asia style">



            </Card>



            </HightLightCard>

    
    </HightLight>


  </Main>
  <Footer>
      
    
  </Footer>


</>



)







}
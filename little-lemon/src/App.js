
import './App.css';
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import UL from "./UL";
import Nav from "./Nav";
import HeroSection from "./HeroSection"
import littlelemon from "./asserts/littlelemon.jpg";
import sausage from "./asserts/sausage.jpb"

function App() {

  let items=["Home","About","Reservation","Order","Online","Login"];
  return (
    <>
      <Header>
        <Nav>
          <img src={littlelemon} alt="Description"  width="150px"  height="40px"/>
          <UL items={items}/>

        </Nav>
      </Header>
      <Main>
        <HeroSection>
             <article>
              <h3>

                Little Lemon
              </h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p> 
              <p>sed do eiusmod tempor ,</p>
              <p>incididunt ut labore et dolore magna aliqua.</p>
              
             </article>
             <article>
                <img  src={sausage}/>

             </article>


        </HeroSection>


      </Main>
      <Footer>
          
        
      </Footer>



    </>
  );
}

export default App;

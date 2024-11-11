
import './App.css';
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import UL from "./UL";
import Nav from "./Nav";
import littlelemon from "./asserts/littlelemon.jpg";

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


      </Main>
      <Footer>

        
      </Footer>



    </>
  );
}

export default App;

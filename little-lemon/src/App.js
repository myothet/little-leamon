
import './App.css';
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import UL from "./UL";
import Nav from "./Nav";
import HeroSection from "./HeroSection"
import littlelemon from "./asserts/littlelemon.jpg";
import sausage from "./asserts/sausage.jpg"
import Button from "./Button"
import HightLight from './HightLight';
import HightLightHeader from './HightLitghtHeader';
import HightLightCard  from "./HightLightCard";
import Card from "./Card"
import Home from "./Home";
import BookingPage from './BookingPage';
import { BrowserRouter as Router,Routes,Route,Link,Navigate} from "react-router-dom";
import BookingForm from './BookingForm';


function App() {

  let items=["Home","About","Reservation","Booking","Order","Online","Login"];
  return (
    <>
     <Router>
      <Header>
        <Nav>
          <img src={littlelemon} alt="Description"  width="150px"  height="40px"/>
          <UL items={items}/>

        </Nav>
      </Header>

     
        <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
      
        <Route path="home" element={<Home/>}/>
        <Route path="booking" element={<BookingPage/>}/>

        </Routes>

      </Router>
      
    </>
  );
}

export default App;

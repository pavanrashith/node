// import Header from "./components/Header"
import Pricing from "./components/Pricing";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./style.css"
import "./newstyle.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Student_profile from "./components/Student_profile";
import Student_club from "./components/Student_club";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Payment_success from "./components/Payment_success";
import SuperAdmin from "./components/SuperAdmin";
import InventoryAvailable from "./components/InventoryAvailable";
import StudentPost from "./components/Student_post";
import StudentOrder from "./components/Student_Order";
import SchoolAdmin from "./components/SchoolAdmin";
import BusinessOwner from "./components/BusinessOwner";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      
      <Header/>
{/* <Home/> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Student_profile" element={<Student_profile/>} />
<Route path="/Student_club" element={<Student_club/>}/>
<Route path="/Checkout" element={<Checkout />} />
<Route path="/Payment" element={<Payment />} />
<Route path="/Payment_success" element={<Payment_success/>}/>
<Route path="/SuperAdmin" element={<SuperAdmin/>}/>
<Route path="/InventoryAvailable" element={<InventoryAvailable/>}/>
<Route path="/StudentPost" element={<StudentPost/>} />
<Route path="/StudentOrder" element={<StudentOrder/>}/> 
<Route path="/SchoolAdmin" element={<SchoolAdmin />}/>
<Route path="/BusinessOwner" element={<BusinessOwner/> }/>
<Route path="/Contact" element={<Contact/>} />
         </Routes>
      </div>

    </div>
    
  )
}

export default App
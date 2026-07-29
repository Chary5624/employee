import './App.css'; import 'bootstrap/dist/css/bootstrap.min.css'; 
//Bootstrap CSS import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Addemployee from './Addemployee.jsx'; 
import Home from './Home';
import GetEmployee from './GetEmployee.jsx'; 
import Services from './Services.jsx'; 
import Contactus from './Contactus.jsx'; 
import Aboutus from './Aboutus.jsx'; 
import AdminDashboard from './admindashboard.jsx'; 
import { BrowserRouter, Routes,Route } from 'react-router-dom'; 
import EmployeeDashboard from './EmployeeDashboard.jsx'; 
import Registration from './registration.jsx'; 

function App() { 
return ( 

<div className="App"> 
<Routes>
 <Route path="/home" element={<Home></Home>}></Route> 
<Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
 <Route path="/contactus" element={<Contactus></Contactus>}></Route>
 <Route path="/Services" element={<Services></Services>}></Route> 
<Route path="/getemployee" element={<GetEmployee></GetEmployee>}></Route> 
<Route path="/addemp" element={<Addemployee></Addemployee>}></Route> 
<Route path='/' element={<Registration></Registration>}></Route> 
<Route path='/admindashbord' element={<AdminDashboard></AdminDashboard>}></Route> 
<Route path='/employeedashboard' element={<EmployeeDashboard></EmployeeDashboard>}></Route> 
</Routes> 
</div> ); } export default App;
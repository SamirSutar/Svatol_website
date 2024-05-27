import NB from './components/NB'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home'
import { SR } from './components/SR';
import Events from './components/Event';
import Aboutus from './components/Aboutus';
import Services from './components/Book';
import Doctors_Img from './components/Hero1';
import Doctor_Details from './components/Doctor_Details';


function App() {
  return (
    <BrowserRouter>
   <NB/>
   
   
     
    
     
    <Routes>
     
     <Route path="/" element={<Home/>}> </Route>
      <Route path="/Service" element={<SR/>}> </Route>
      <Route path="/Events" element={<Events/>} > </Route>Services
      <Route path="/Services" element={<Services/>}> </Route>
      <Route path="/Our_Doctors" element={<Doctor_Details/>}> </Route>
    
      <Route path="/Aboutus" element={<Aboutus/>}> </Route>




    </Routes>
    
    </BrowserRouter>
  );
}

export default App;

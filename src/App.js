import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
import Home from './components/Home';

import Cuttingdep from './components/Cuttingdep';
import Fabricdep from './components/Fabricdep';
import Embroiderydep from './components/Embroiderydep';
import Printingdep from './components/Printingdep';
import Sewingdep from './components/Sewingdep';
import Finishingdep from './components/Finishingdep';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="App" >
     <Navbar/>
     <Signup/>
     <Login/>
     <Home/>
    
    
    <Routes>
    <Route path="/FabricDept" element={<Fabricdep/>}/>
   <Route path='/CuttingDept' element={<Cuttingdep/>}/>
   <Route path="/EmbroideryDept" element={<Embroiderydep/>}/>
   <Route path="/PrintingDept" element={<Printingdep/>}/>
   <Route path="/SewingDept" element={<Sewingdep/>}/>
   <Route path="/FinishingDept" element={<Finishingdep/>}/>
    </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;

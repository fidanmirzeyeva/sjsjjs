import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AdminLayout from './layout/AdminLayout';
import MainLayout from './layout/MainLayout';
import AdminHome from './pages/AdminHome/AdminHome';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import AdminTable from "./pages/AdminTable/AdminTable";
import Add from "./pages/Add.jsx/Add";



function App() {

  return (
    <>
   
    <BrowserRouter>
      <Routes>
        {/* client */}
      <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>


        </Route>
        {/* admin */}
        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<AdminHome/>}/>
          <Route path="/admin/table" element={<AdminTable/>}/>
          <Route path="/admin/add" element={<Add/>}/>
        </Route>
          
        
       
      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App

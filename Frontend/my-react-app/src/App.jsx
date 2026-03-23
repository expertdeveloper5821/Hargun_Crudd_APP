import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import User from './Components/User'
import Admin from './Components/Admin'
import { useContext } from 'react'
import AppContext from './Context/AppContext'
// import Protect from './Components/UserProtect'
import AdminProtect from './Components/AdminProtect'
import UserProtect from './Components/UserProtect'
import ProductDetail from './Components/ProductDetail'
import AddProduct from './Components/AddProduct'
import EditProduct from './Components/EditProduct'

const App = () => {
  const {role} = useContext(AppContext);
  return (
    <>
    <Routes>
       
        <Route path='/admin' element={ <AdminProtect><Admin /></AdminProtect>}/>
        <Route path='/user' element={<UserProtect><User /></UserProtect>}></Route>
        <Route path='/reg' element={<Register />}></Route>
        <Route path='/log' element={<Login />}></Route>
        <Route path='/product/:id' element={<ProductDetail />} />
        {role === "admin" && (
          <>
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/editproduct/:id' element={<EditProduct />} />
          </>
        )}  
    </Routes>
    </>
  )
}

export default App

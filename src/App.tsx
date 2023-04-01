import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Product from './component/Product'
import AddProduct from './component/AddProduct'
import EditProduct from './component/EditProduct'
import { useRequest } from 'ahooks'
import Mui from './component/Mui'
import TableProduct from './component/TableProduct'
// import 'antd/dist/reset.css';
function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/edit/:id' element={<EditProduct/>}/>
        <Route path='/mui-test' element={<Mui/>}/>
        <Route path='/list-product' element={<TableProduct/>}/>
      </Routes>
    </div>
  )
}

export default App

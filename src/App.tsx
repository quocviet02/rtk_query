import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Product from './component/Product'
import AddProduct from './component/product/AddProduct'

import { useRequest } from 'ahooks'
import Mui from './component/Mui'
import He from './component/layout/Header'
import UpdateProduct from './component/product/UpdateProduct'


function App() {


  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<He />}>
          <Route index element={<Product />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update/:id' element={<UpdateProduct/>}/>
          <Route path='/mui-test' element={<Mui />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App

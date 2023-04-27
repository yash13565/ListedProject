import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import SignIn from '../Pages/Signin/Signin'
import Dashboard from '../component/Dashboard/Dashboard'
function Routing() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/signin' element={<SignIn/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing
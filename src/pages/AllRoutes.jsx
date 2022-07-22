// import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Jefit from '../jefitpage/Jefit'
import Login from './Login'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Jefit/>}/>
            <Route path='/exercise' element={<>Exercise</>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<div>signupn</div>}/>
            
        </Routes>
    </>
  )
}

export default AllRoutes
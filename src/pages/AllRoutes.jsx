// import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Back from '../exercisepage/1top/LeftSection/back/Back'
import Biceps from '../exercisepage/1top/LeftSection/biceps/Biceps'
import Glutes from '../exercisepage/1top/LeftSection/glutes/Glutes'
import Legs from '../exercisepage/1top/LeftSection/lowerLegs/Legs'
import Triceps from '../exercisepage/1top/LeftSection/triceps/Triceps'
import Abs from '../exercisepage/1top/RightSection/abs/Abs'
import Chest from '../exercisepage/1top/RightSection/chest/Chest'
import Forearms from '../exercisepage/1top/RightSection/forearms/Forearms'
import Shoulder from '../exercisepage/1top/RightSection/shoulder/Shoulder'
import Upperlegs from '../exercisepage/1top/RightSection/upperlegs/Upperlegs'
import Exercise from '../exercisepage/Exercise'

import Jefit from '../jefitpage/Jefit'
import Login from './Login'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Jefit/>}/>
            <Route path='/exercise' element={<Exercise/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<div>signupn</div>}/>
            <Route path='/triceps' element={<Triceps/>}/>
            <Route path='/biceps' element={<Biceps/>}/>
            <Route path='/back' element={<Back/>}/>
            <Route path='/glutes' element={<Glutes/>}/>
            <Route path='/lowerleg' element={<Legs/>}/>
            <Route path='/shoulder' element={<Shoulder/>}/>
            <Route path='/chest' element={<Chest/>}/>
            <Route path='/forearms' element={<Forearms/>}/>
            <Route path='/abs' element={<Abs/>}/>
            <Route path='/upperleg' element={<Upperlegs/>}/>
            
        </Routes>
    </>
  )
}

export default AllRoutes
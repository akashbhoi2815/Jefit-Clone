import { Box } from '@chakra-ui/react'
import React from 'react'
import ConnectMembers from './2connect/ConnectMembers'
import TopSection from './1top/TopSection'
import WorkOut from './3workoutNeed/WorkOut'
import Plans from './4plan/Plans'
import Featured from './5featured/Featured'
import Experts from './expert/Experts'
import MobileApp from './7mobileApp/MobileApp'
import Footer from '../components/Footer'


const Jefit = () => {
  return (
    <Box>
        <TopSection/>
        <ConnectMembers />
        <WorkOut />
        <Plans/>
        <Featured/>
        <Experts/>
        <MobileApp/>
        <Footer/>
        
    </Box>
  )
}

export default Jefit
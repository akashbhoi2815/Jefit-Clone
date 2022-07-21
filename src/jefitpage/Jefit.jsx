import { Box } from '@chakra-ui/react'
import React from 'react'
import ConnectMembers from './2connect/ConnectMembers'
import TopSection from './1top/TopSection'
import WorkOut from './3workoutNeed/WorkOut'
import Plans from './4plan/Plans'


const Jefit = () => {
  return (
    <Box>
        <TopSection/>
        <ConnectMembers />
        <WorkOut />
        <Plans/>
        
    </Box>
  )
}

export default Jefit
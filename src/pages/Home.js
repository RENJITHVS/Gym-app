import React, { useState } from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExersise from '../components/SearchExersise';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exersises, setExercises] = useState([])
  return (
    <Box>
      <HeroBanner />
      <SearchExersise setExercises={setExercises}  bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises}  bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default Home

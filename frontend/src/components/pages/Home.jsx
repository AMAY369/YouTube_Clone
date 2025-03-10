import React from 'react'
import styled from 'styled-components'
import VideoCard from '../VideoCard';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;


function Home() {
  return (
    <Container>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
    </Container>
  )
}

export default Home
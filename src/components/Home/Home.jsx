import React from 'react'
import styled from 'styled-components'


function Home() {
  return (
    <Wrapper>
        <h1>home</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${ ({theme}) => theme.colors.bg};
  width:40rem;
  height:40rem;
`


export default Home

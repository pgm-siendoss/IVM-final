import React from 'react'
import styled from 'styled-components';

const Contain = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 1rem;
`

const Container = ({children}) => {
  return (
    <Contain>{children}</Contain>
  )
}

export default Container
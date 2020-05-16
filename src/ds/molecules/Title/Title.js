import React from 'react'
import styled from 'styled-components'
import { Heading } from '../../atoms'

const Title = props => {
  return (
    <Wrapper>
      <Heading margin="8px" marginBottom="28px">S</Heading>
      <Heading margin="8px" marginTop="28px">A</Heading>
      <Heading margin="8px" marginBottom="28px">R</Heading>
      <Heading margin="8px" marginTop="28px">A</Heading>
      <Heading margin="8px" marginBottom="28px">H</Heading>
      <Heading margin="30px">{" "}</Heading>
      <Heading margin="8px" marginTop="28px">S</Heading>
      <Heading margin="8px" marginBottom="28px">W</Heading>
      <Heading margin="8px" marginTop="28px">E</Heading>
      <Heading margin="8px" marginBottom="28px">A</Heading>
      <Heading margin="8px" marginTop="28px">T</Heading>
    </Wrapper>
  )
}

export default Title

Title.displayName = "Title"

const Wrapper = styled.div`
  display: flex;
`

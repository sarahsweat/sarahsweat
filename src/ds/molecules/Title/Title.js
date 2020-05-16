import React from 'react'
import styled from 'styled-components'
import { Heading } from '../../atoms'

const Title = props => {
  return (
    <Wrapper>
      <Heading margin="extraSmall" marginBottom="large">S</Heading>
      <Heading margin="extraSmall" marginTop="large">A</Heading>
      <Heading margin="extraSmall" marginBottom="large">R</Heading>
      <Heading margin="extraSmall" marginTop="large">A</Heading>
      <Heading margin="extraSmall" marginBottom="large">H</Heading>
      <Heading margin="large">{" "}</Heading>
      <Heading margin="extraSmall" marginTop="large">S</Heading>
      <Heading margin="extraSmall" marginBottom="large">W</Heading>
      <Heading margin="extraSmall" marginTop="large">E</Heading>
      <Heading margin="extraSmall" marginBottom="large">A</Heading>
      <Heading margin="extraSmall" marginTop="large">T</Heading>
    </Wrapper>
  )
}

export default Title

Title.displayName = "Title"

const Wrapper = styled.div`
  display: flex;
`

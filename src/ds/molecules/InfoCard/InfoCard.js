import React from 'react'
import styled from 'styled-components'
import { SubHeading, BodyText } from '../../atoms'

const InfoCard = ({ title, description }) => {
  return (
    <Wrapper>
      <SubHeading>{title}</SubHeading>
      <BodyText>{description}</BodyText>
    </Wrapper>
  )
}

export default InfoCard

InfoCard.displayName = "InfoCard"

const Wrapper = styled.div`
  width: 80%;
  border-radius: 15px;
  background-color: ${p => p.theme.colors.accent4};
  border: solid 5px ${p => p.theme.colors.secondary};
  padding: 20px;
  box-shadow: 7px 5px 5px ${p => p.theme.colors.primary};

`

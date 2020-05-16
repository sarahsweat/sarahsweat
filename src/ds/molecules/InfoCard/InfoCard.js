import React from 'react'
import styled from 'styled-components'
import { SectionHeading, BodyText } from '../../atoms'

const InfoCard = ({ title, description }) => {
  return (
    <Wrapper>
      <SectionHeading>{title}</SectionHeading>
      {description.length > 0 ? (
          description.map((desc, idx) => <BodyText key={idx}>{desc}</BodyText>)
        ) : (
          <div>
            <a href="https://www.linkedin.com/in/sarah-sweat/" target="_blank" rel='noopener noreferrer'>
              <BodyText>LinkedIn</BodyText>
            </a>
            <a href="https://medium.com/@sarahsweat" target="_blank" rel='noopener noreferrer'>
              <BodyText>Blog</BodyText>
            </a>
          </div>
        )
      }
    </Wrapper>
  )
}

export default InfoCard

InfoCard.displayName = "InfoCard"

const Wrapper = styled.div`
  width: 80%;
  border-radius: 12px;
  background-color: ${p => p.theme.colors.accent4};
  border: solid 3px ${p => p.theme.colors.secondary};
  padding: 20px;
  box-shadow: 7px 5px 5px ${p => p.theme.colors.primary};
  margin: 10px 20px;
  @media (min-width: 768px) {
    width: 60%;
    box-shadow: 10px 8px 4px ${p => p.theme.colors.primary};
  }
`

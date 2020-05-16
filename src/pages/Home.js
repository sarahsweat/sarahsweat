import React from 'react'
import styled from 'styled-components'
import {  SubHeading, InfoCard, Title } from '../ds'
import { data } from '../data'

const Home = () => {
  const { subTitle, contentBlocks } = data
  return (
    <Wrapper>
      <HeadingWrapper>
        <Title />
        <SubHeading>{subTitle}</SubHeading>
      </HeadingWrapper>
      <ContentWrapper>
        {
          contentBlocks.map(block => (
            <InfoCard
              key={block.title}
              title={block.title}
              description={block.description}
             />
          ))
        }
      </ContentWrapper>
    </Wrapper>
  )
}

export default Home

Home.displayName = "Home"

const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.accent2};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0%;
  padding: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeadingWrapper = styled.div`
  background-color: ${p => p.theme.colors.accent2};
  border-bottom: solid 3px ${p => p.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  @media (min-width: 768px) {
    width: 88%;
    padding: 20px;
  }
`

const ContentWrapper = styled.div`
  margin: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

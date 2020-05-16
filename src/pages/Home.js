import React from 'react'
import styled from 'styled-components'
import {  SubHeading, InfoCard, Title } from '../ds'
import { data } from '../data'

const Home = () => {
  const { subTitle, contentBlocks } = data
  return (
    <Wrapper>
      <ScrollingWrapper>
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
      </ScrollingWrapper>
    </Wrapper>
  )
}

export default Home

Home.displayName = "Home"

const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.accent2};
  width: 100vw;
  height: auto;
  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
  overflow: hidden;
  margin: 0%;
  padding: 0%;

`

const ScrollingWrapper = styled.div`
  height: 100%;
  width: inherit;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`


const HeadingWrapper = styled.div`
  background-color: ${p => p.theme.colors.accent2};
  border-bottom: solid 2px ${p => p.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90px;
  padding: 10px;
  @media (min-width: 768px) {
    width: 88%;
    min-height: 170px;
    padding: 20px;
  }
`

const ContentWrapper = styled.div`
  margin: .75rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

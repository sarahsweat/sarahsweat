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
  overflow: hidden;
  margin: 0%;
  padding: 0%;
  * {
    box-sizing: border-box;
  }
`

const HeadingWrapper = styled.div`
  padding: 20px;
  margin: 20px 200px;
  border-bottom: solid 2px ${p => p.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.div`
  margin: 20px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

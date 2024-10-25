import React from 'react'
import styled from 'styled-components'
import {  SubHeading, InfoCard, Heading, ImageBlock } from '../ds'
import { data, BLOCK_TYPES } from '../data'

const Home = () => {
  const { title, subTitle, contentBlocks } = data
  
  return (
    <Wrapper>
        <HeadingWrapper>
          <Heading margin="medium">{title}</Heading>
          <SubHeading>{subTitle}</SubHeading>
        </HeadingWrapper>
        <ContentWrapper>
          {
            contentBlocks.map(block => {
              switch (block.type) {
                case (BLOCK_TYPES.TEXT):
                  return <InfoCard
                    key={block.title}
                    title={block.title}
                    description={block.description}
                  />
                case (BLOCK_TYPES.IMAGE_ROW): 
                  return <ImageBlock images={block.images} />
                default: return null
              }
            }
            )
          }
        </ContentWrapper>
    </Wrapper>
  )
}

export default Home

Home.displayName = "Home"

const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.neutral};
  min-width: 100vw;
  min-height: 100vh;
  margin: 0%;
  padding: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeadingWrapper = styled.div`
  border-bottom: solid 2px ${p => p.theme.colors.lightGray};
  text-align: center;
  width: 90%;
  padding: 10px;
  @media (min-width: 768px) {
    width: 85%;
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

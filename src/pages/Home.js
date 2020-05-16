import React from 'react'
import styled from 'styled-components'
import { Heading, SubHeading, BodyText } from '../ds'

const Home = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Heading>Sarah Sweat</Heading>
        <SubHeading>
          Software Engineer  |  Teacher  |  Blogger
        </SubHeading>
      </HeadingWrapper>
      <ContentWrapper>
        <SubHeading>About Me</SubHeading>
        <BodyText>
          In college, I studied Mechanical Engineering, but always loved my coding
          classes the most. Instead of applying code to hardware, I decided to make
          a switch and learn how to apply my coding skills on the web development side.
          I joined Spoon University initially and have since transitioned to other
          Discovery brands, primarily Food Network. I am continuing to learn and grow
          every day, knowing I made the right choice.
        </BodyText>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Home

Home.displayName = "Home"

const Wrapper = styled.div`
  background-color: #0F292F;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0%;
  padding: 0%;
`

const HeadingWrapper = styled.div`
  padding: 20px;
  margin: 20px 200px;
  border-bottom: solid 2px #CB2D6F;
  text-align: center;
`

const ContentWrapper = styled.div`
  margin: 20px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

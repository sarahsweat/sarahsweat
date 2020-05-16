import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Heading>Sarah Sweat</Heading>
        <SubHeading>
          Software Engineer | Teacher | Blogger
        </SubHeading>
      </HeadingWrapper>
      <ContentWrapper>
        <div>
          <SubHeading>About Me</SubHeading>
          <SectionContent>
            In college, I studied Mechanical Engineering, but always loved my coding
            classes the most. Instead of applying code to hardware, I decided to make
            a switch and learn how to apply my coding skills on the web development side.
            I joined Spoon University initially and have since transitioned to other
            Discovery brands, primarily Food Network. I am continuing to learn and grow
            every day, knowing I made the right choice.
          </SectionContent>
        </div>
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

const Heading = styled.h1`
  font-size: 50px;
  font-family: Helvetica, sans-serif;
  color: #14A098;
  margin: 5px;
  padding: 0%;
`

const SubHeading = styled.p`
  font-size: 25px;
  font-family: Helvetica, sans-serif;
  color: white;
  margin: 5px 0;
  padding: 0%;
`

const ContentWrapper = styled.div`
  margin: 20px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionContent = styled.div`
  font-size: 15px;
  font-family: Helvetica, sans-serif;
  color: white;
`

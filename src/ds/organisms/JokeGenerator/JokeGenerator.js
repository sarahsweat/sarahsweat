import React, { useState, useEffect } from "react"
import styled from "styled-components";
import { BodyText, SectionHeading } from "../../atoms";

const JOKE_URL = "https://official-joke-api.appspot.com/random_joke"



const JokeGenerator = ({ title }) => {
  const [jokeSetup, setJokeSetup] = useState('')
  const [jokePunchline, setJokePunchline] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      const response = await fetch(JOKE_URL)
      const data = await response.json()
      if (response.ok) {
        setJokeSetup(data.setup)
        setJokePunchline(data.punchline)
        setIsLoading(false)
      }
    } catch (err) {
      setError(err)
    } 
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleGetANewJoke = () => {
    fetchData()
  }

  return (
    <Wrapper>
      <SectionHeading>
        {title}
      </SectionHeading>
      <div>
        {error && <BodyText>{error}</BodyText>}
        {isLoading && <BodyText>Loading...</BodyText>}
        {jokeSetup && <BodyText>{jokeSetup}</BodyText>}
        {jokePunchline && <BodyText>{jokePunchline}</BodyText>}
        <Button onClick={handleGetANewJoke}>
          Get a New Joke
        </Button>
      </div>
    </Wrapper>
  )
};

export default JokeGenerator;


const Wrapper = styled.div`
  width: 80%;
  background-color: ${p => p.theme.colors.white};
  padding: 20px;
  box-shadow: 1px 1px 1px ${p => p.theme.colors.primary};
  border-radius: 3px;
  margin: 10px 20px;
  @media (min-width: 768px) {
    width: 60%;
    box-shadow: 1px 1px 3px ${p => p.theme.colors.primary};
  }
`

const Button = styled.button`
  background-color: ${p => p.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
`
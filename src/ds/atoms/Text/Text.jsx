import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 50px;
  font-family: Helvetica, sans-serif;
  text-shadow: 2px 2px 3px ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.primary};
  margin: 5px;
  padding: 0%;
`

export const SubHeading = styled.p`
  font-size: 25px;
  font-family: Helvetica, sans-serif;
  color: ${p => p.theme.colors.accent1};
  margin: 5px 0;
  padding: 0%;
`

export const BodyText = styled.span`
  font-size: 15px;
  font-family: Helvetica, sans-serif;
  color: ${p => p.theme.colors.accent1};
;
`

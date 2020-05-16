import styled, {css} from 'styled-components'

const MARGIN_STYLES = css`
  margin: ${p => p.margin || 0};
  ${p => p.marginTop && `margin-top: ${p.marginTop};`}
  ${p => p.marginBottom && `margin-bottom: ${p.marginBottom};`}
`

export const Heading = styled.h1`
  ${MARGIN_STYLES}
  font-size: 75px;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  text-shadow: 3px 3px 5px ${p => p.theme.colors.accent1};
  color: ${p => p.theme.colors.primary};
  padding: 0%;
`

export const SubHeading = styled.p`
  font-size: 30px;
  font-family: Helvetica, sans-serif;
  font-weight: 500;
  color: ${p => p.theme.colors.accent1};
  text-shadow: 2px 2px 3px ${p => p.theme.colors.accent2};
  margin: 0;
  padding: 0%;
`

export const BodyText = styled.span`
  font-size: 17px;
  font-family: Helvetica, sans-serif;
  color: ${p => p.theme.colors.accent3};
;
`

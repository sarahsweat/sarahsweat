import styled, {css} from 'styled-components'

const MARGIN_STYLES = css`
  margin: ${p => p.theme.margin.mobile[p.margin] || 0};

  @media (min-width: 768px) {
    margin: ${p => p.theme.margin.desktop[p.margin] || 0};
  }
`

export const Heading = styled.h1`
  ${MARGIN_STYLES}
  font-size: 55px;
  letter-spacing: 4px;
  @media (min-width: 768px) {
    font-size: 75px;
  }
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  color: ${p => p.theme.colors.primary};
  padding: 0%;
`

export const SubHeading = styled.p`
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 35px;
  }
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  letter-spacing: .8px;
  color: ${p => p.theme.colors.secondary};
  margin: 0;
  padding: 0%;
`

export const SectionHeading = styled.p`
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  letter-spacing: 1.1px;
  color: ${p => p.theme.colors.darkGray};
  margin: 0;
  padding: 0%;
  border-bottom: solid 1px ${p => p.theme.colors.black};
`


export const BodyText = styled.p`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: .8px;
  line-height: 1.5rem;
  @media (min-width: 768px) {
    font-size: 17px;
  }
  font-family: Helvetica, sans-serif;
  color: ${p => p.theme.colors.darkGray};
;
`

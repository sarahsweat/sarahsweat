import styled, {css} from 'styled-components'

const MARGIN_STYLES = css`
  margin: ${p => p.theme.margin.mobile[p.margin] || 0};

  @media (min-width: 768px) {
    margin: ${p => p.theme.margin.desktop[p.margin]};
  }

  ${p => p.marginTop && `
    margin-top: ${p.theme.margin.mobile[p.marginTop]};
    @media (min-width: 768px) {
      margin-top: ${p.theme.margin.desktop[p.marginTop]};
    }
  `}

  ${p => p.marginBottom && `
    margin-bottom: ${p.theme.margin.mobile[p.marginBottom]};
    @media (min-width: 768px) {
      margin-bottom: ${p.theme.margin.desktop[p.marginBottom]};
    }
  `}
`

export const Heading = styled.h1`
  ${MARGIN_STYLES}
  font-size: 45px;
  @media (min-width: 768px) {
    font-size: 75px;
  }
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  text-shadow: 3px 3px 5px ${p => p.theme.colors.accent1};
  color: ${p => p.theme.colors.primary};
  padding: 0%;
`

export const SubHeading = styled.p`
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 25px;
  }
  font-family: Helvetica, sans-serif;
  font-weight: 500;
  color: ${p => p.theme.colors.accent1};
  text-shadow: 2px 2px 3px ${p => p.theme.colors.accent2};
  margin: 0;
  padding: 0%;
`

export const BodyText = styled.p`
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
  font-family: Helvetica, sans-serif;
  color: ${p => p.theme.colors.accent3};
;
`

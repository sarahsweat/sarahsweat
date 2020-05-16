const colorPalette = {
  pink: '#D55096',
  lightPink: '#E278A0',
  purple: '#A03991',
  lavender: '#AE9CC4',
  lightLavender:'#F0ECF4',
  lightBlue: '#A7C1D0'
}

export const SSTheme = {
  colors: {
    primary: colorPalette.pink,
    secondary: colorPalette.lavender,
    accent1: colorPalette.purple,
    accent2: colorPalette.lightBlue,
    accent3: colorPalette.lightPink,
    accent4: colorPalette.lightLavender,
  },
  colorPalette,
  margin: {
    desktop: {
      extraSmall: '4px',
      small: '8px',
      medium: '16px',
      large: '32px',
      extraLarge: '64px'
    },
    mobile: {
      extraSmall: '1px',
      small: '2px',
      medium: '4px',
      large: '8px',
      extraLarge: '16px'
    }
  },
  padding: {
    extraSmall: '4px',
    small: '8px',
    medium: '16px',
    large: '32px',
    extraLarge: '64px'
  },
  fontStyles: {
    sizes: {
      extraSmall: '4px',
      small: '8px',
      medium: '16px',
      large: '32px',
      extraLarge: '64px'
    },
    weights: {
      thin: 400,
      normal: 500,
      bold: 700,
    }
  }
}

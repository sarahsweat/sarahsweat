const colorPalette = {
  navy: '#5050A0',
  grey: '#715F72',
  purple: '#AF55A5',
  lightPurple: '#BF90E0',
  lightBlue:'#e1f5fa',
  blue: '#27b4db',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  mediumGray: '#4a4a4a',
  darkGray: '#333333',
  black: '#1C1C1C',
}

export const SSTheme = {
  colors: {
    primary: colorPalette.blue,
    secondary: colorPalette.lightBlue,
    accent1: colorPalette.navy,
    accent2: colorPalette.lightBlue,
    accent3: colorPalette.grey,
    accent4: colorPalette.lightLavender,
    white: colorPalette.white,
    lightGray: colorPalette.lightGray,
    mediumGray: colorPalette.mediumGray,
    darkGray: colorPalette.darkGray,
    black: colorPalette.black,

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

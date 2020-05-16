const colorPalette = {
  navy: '#5050A0',
  grey: '#715F72',
  purple: '#AF55A5',
  lightPurple: '#BF90E0',
  lightLavender:'#F0ECF4',
  lightBlue: '#D5E5F2'
}

export const SSTheme = {
  colors: {
    primary: colorPalette.purple,
    secondary: colorPalette.lightPurple,
    accent1: colorPalette.navy,
    accent2: colorPalette.lightBlue,
    accent3: colorPalette.grey,
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

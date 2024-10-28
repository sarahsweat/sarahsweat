import React from 'react'
import { ThemeProvider} from 'styled-components';
import { SSTheme } from '../src/ds';


export const decorators = [ storyFn => (
  <ThemeProvider theme={SSTheme}>
    {storyFn()}
  </ThemeProvider>
)];


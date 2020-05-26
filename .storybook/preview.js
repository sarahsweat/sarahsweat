import React from 'react'
import { addDecorator } from '@storybook/react';
import { ThemeProvider} from 'styled-components';
import { SSTheme } from '../src/ds';


addDecorator(storyFn => (
  <ThemeProvider theme={SSTheme}>
    {storyFn()}
  </ThemeProvider>
));

import React, { useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../constants/styles'

const BaseLayout = () => {
    const [theme,] = useState(lightTheme) ;
  return (
    <ThemeProvider theme={theme}>
        <div>BaseLayout</div>
    </ThemeProvider>
  )
}

export default BaseLayout
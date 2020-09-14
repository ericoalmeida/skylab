import React from 'react'
import {ThemeProvider as ChakraThemeProvider, ColorModeProvider, CSSReset} from '@chakra-ui/core'
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming'

const ThemeContainer: React.FC = ({children}) => {
    return (
        <ChakraThemeProvider theme={{}}>
            <ColorModeProvider value="dark" >
                <EmotionThemeProvider theme={{}}>
                    <CSSReset />
                    {children}
                </EmotionThemeProvider>
            </ColorModeProvider>
        </ChakraThemeProvider>
    )
}


export {ThemeContainer}
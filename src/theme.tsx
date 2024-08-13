import {
    createTheme
} from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#221a4a',
        },
        secondary: {
            main: '#f4f4f2'
        },
    },
    typography: {
        fontFamily: ["Lato", 'sans-serif'].join(','),
    }
})

export default theme;
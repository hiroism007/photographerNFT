import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f8ddb6',
            dark: '#689F38',
            light: '#DCEDC8'
        },
        text: {
            primary: '#4e4e4e',
            secondary: '#757575'
        },
        background: {
            default: 'white',
            paper:
                'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
        }
    }
})

export default theme

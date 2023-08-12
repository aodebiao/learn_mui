import {createTheme} from '@mui/material/styles';
import {orange} from "@mui/material/colors";


export const dashboardTheme = createTheme({
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    // fontSize: '3rem !important',
                    // backgroundColor:'red !important'
                },
            },
        },
    },
    palette:{
        primary:{
            main:'#FF385C'
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    spacing:[4,8,12,16,20]
})
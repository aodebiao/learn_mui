import Grid from '@mui/material/Unstable_Grid2';
import CommonButton from "../../components/common/button/CommonButton"; // Grid version 2


const Authentication = () => {
    const buttonStyles = {
        fontWeight:600,
        fontSize:'0.875rem',
        textTransform:'capitalize',
        borderRadius:2.5,
        '&.MuiButton-contained':{
            backgroundColor: '#009be5',
            '&:hover':{
                backgroundColor: '#006db3'
            }
        },
        '&.MuiButton-outlined':{
            color:'#fff',
            borderColor:'#fff',
            '&:hover':{
                backgroundColor:'transparent'
            }
        }

    }
    return (
        <Grid xs={8}>
            This is authentication page.
            <CommonButton
                size='large'
                variant='contained'
                sx={buttonStyles}
                >
                Add user
            </CommonButton>

            <CommonButton
                size='large'
                variant='outlined'
                sx={buttonStyles}
                color='primary'
            >
                Web setup
            </CommonButton>

        </Grid>
    )
}

export default Authentication
import Navbar from "./components/Navbar/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import {Outlet} from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
    return (
        <Grid container>
            <CssBaseline>
                <Navbar/>
                <Outlet/>

            </CssBaseline>
        </Grid>
    );
}

export default App;

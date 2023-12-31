import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LogoutButton } from './LogoutButton';

const Header = () => {

    return (
        <Box sx={{ flexGrow: 1, mb: "2rem" }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Issue Tracking
                    </Typography>
                    <LogoutButton />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header
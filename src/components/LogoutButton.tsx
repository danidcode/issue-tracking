import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';
export const LogoutButton = () => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: "/auth",
            },
        });
    };

    return (
        <Button color="inherit" onClick={handleLogout}>Log out</Button>
    );
};
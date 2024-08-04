'use client'
import { useEffect, useState } from 'react'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import DrawerList from './DrawerList';
import Link from 'next/link';

const Navbar = () => {

    const [auth, setAuth] = useState(false);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleProfile = () => {
        handleClose();

    }

    // const authenticate = async()=>{
    //     const { isAuthenticated } = getKindeServerSession();
    //     const isUserAuthenticated = await isAuthenticated();
    //     setAuth(isUserAuthenticated)
    // }

    const { isAuthenticated, isLoading, user } = useKindeBrowserClient();

    useEffect(() => {
        // authenticate()
        setAuth(isAuthenticated?true:false);
        // console.log("is authenticated ",isAuthenticated);
    }, [isAuthenticated])

    return (
        <div>

            {/* the sidebar */}
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <DrawerList setDrawer={toggleDrawer} />
            </Drawer>

            {/* navbar */}
            {/* <div style={{ zIndex: 10, position: "relative", backgroundColor: "red" }}>
                test
            </div> */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon onClick={toggleDrawer(true)} />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Hydro Smart Link
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <Link href={'/profile'}><MenuItem onClick={() => { handleProfile() }}>{user?.given_name}'s Profile</MenuItem></Link>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}><LogoutLink>Log out</LogoutLink></MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            {/* <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={auth}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                        // <Button onClick={toggleDrawer(true)}>Open drawer</Button>
                    }
                    label={auth ? 'Logout' : 'Login'}
                />
            </FormGroup> */}
        </div>
    )
}

export default Navbar
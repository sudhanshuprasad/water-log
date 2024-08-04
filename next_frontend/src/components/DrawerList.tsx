import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Button, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import Link from 'next/link';

interface Props {
    setDrawer: any
}

const DrawerList = ({ setDrawer }: Props) => {

    return (
        <div>
            <Toolbar />

            <Box sx={{ width: 250 }} role="presentation" onClick={setDrawer(false)}>
                <List>

                    <Link href={'/'}>
                        <ListItem disablePadding>
                            <ListItemButton>

                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>

                                <ListItemText primary={'Home'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    {['Notifications', 'Starred', 'Send feedback', 'Saved devices'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>

                    <Link href={'/settings'}>
                        <ListItem disablePadding>
                            <ListItemButton>

                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>

                                <ListItemText primary={'Setttings'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link href={'/about-us'}>
                        <ListItem disablePadding>
                            <ListItemButton>

                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>

                                <ListItemText primary={'About Us'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                </List>
            </Box>
        </div>
    )
}

export default DrawerList

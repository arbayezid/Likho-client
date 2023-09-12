
import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Account from '../../Account/Account'
import PostAddIcon from '@mui/icons-material/PostAdd';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Drags from '../../DragInAccount/Drags';
import DashDocument from '../../DashDocument/DashDocument';
import { Send } from '@mui/icons-material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import{LuLayoutTemplate} from 'react-icons/Lu'
import DashBoardSent from '../DashBoardSent/DashBoardSent';
import { Avatar } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyProfile from '../../Profile/MyProfile';
import UpdateProfile from '../../Profile/UpdateProfile';
import DashBoardTemplate from '../DashBoardTemplate/DashBoardTemplate';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function UserDashboard() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [menuData, setMenuData] = useState('NewDoc')

    const {user } = useContext(AuthContext)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div>
                <Account></Account>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open} elevation={4} sx={{ bgcolor: '#ffffff' }}>
                        <Toolbar>
                            <IconButton
                                color="bg-[#B9B4C7]"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                            // sx={{
                            //     marginRight: 5,
                            //     ...(open && { display: 'none' }),
                            // }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div" sx={{height:60, m:3}}>
                                <div className='lg:flex'>
                                    <div>
                                        <Avatar alt="Cindy Baker" src={user?.photoURL} />
                                    </div>
                                    <div className='text-black ml-4'>
                                        <div>{user?.displayName}</div>
                                        <div>{user?.email}</div>
                                    </div>
                                </div>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List>
                            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenuData('NewDoc')}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {<PostAddIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary='New Document' sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenuData('Inbox')}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {<InboxIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary='Inbox' sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenuData('sent')}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {<Send />}
                                    </ListItemIcon>
                                    <ListItemText primary='Sent' sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenuData('document')}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {<DocumentScannerIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary='Document' sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenuData('setting')}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {<SettingsOutlinedIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary='Setting' sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenuData('template')}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {<LuLayoutTemplate />}
                                    </ListItemIcon>
                                    <ListItemText primary='template' sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </List>

                    </Drawer>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <DrawerHeader />

                        {menuData == 'NewDoc' && <Drags></Drags>}
                        {menuData == 'document' && <DashDocument></DashDocument>}
                        {menuData == 'sent' && <DashBoardSent></DashBoardSent>}
                        {menuData == 'setting' && <UpdateProfile></UpdateProfile> }
                        {menuData == 'template' && <DashBoardTemplate></DashBoardTemplate> }


                    </Box>
                </Box>
            </div>
        </>
    );
}


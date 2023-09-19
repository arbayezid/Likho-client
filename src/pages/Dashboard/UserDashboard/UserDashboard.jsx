import React from 'react';
import { FaHome, FaPlus, FaThList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaThList } from 'react-icons/fa';


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
        <div className='text-[#1c3a45] gap-3'>
            <li><Link to={'/'}><FaHome></FaHome> User Home</Link></li>
            <li><Link to={'/dashboard/newDoc'}><FaPlus></FaPlus>New Document</Link></li>
            <li><Link to={'/dashboard/Doc'}><FaPlus></FaPlus> Collaborator</Link></li>
            <li><Link to={'/dashboard/inbox'}><FaThList></FaThList>Inbox</Link></li>
            <li><Link to={'/dashboard/sent'}><FaThList></FaThList>Sent</Link></li>
            <li><Link to={'/dashboard/setting'}><FaThList></FaThList>Setting</Link></li>
            <li><Link to={'/dashboard/template'}><FaThList></FaThList>Template</Link></li>
            {/* <li><Link to={`/dashboard/payment/${AllClasses._id}`}><FaWallet></FaWallet> Payment</Link></li> */}
        
        </div>
    );
}


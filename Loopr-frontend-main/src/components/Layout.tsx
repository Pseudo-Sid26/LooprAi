import React, { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  TableChart as TableChartIcon,
  AccountCircle,
  Logout,
  AccountBalanceWallet as WalletIcon,
  Analytics as AnalyticsIcon,
  Person as PersonIcon,
  Message as MessageIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const drawerWidth = 240;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleProfileMenuClose();
    navigate('/login');
  };

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      path: '/dashboard',
      active: true,
    },
    {
      text: 'Transactions',
      icon: <TableChartIcon />,
      path: '/transactions',
      active: true,
    },
    {
      text: 'Wallet',
      icon: <WalletIcon />,
      path: '/wallet',
      active: false,
    },
    {
      text: 'Analytics',
      icon: <AnalyticsIcon />,
      path: '/analytics',
      active: false,
    },
    {
      text: 'Personal',
      icon: <PersonIcon />,
      path: '/personal',
      active: false,
    },
    {
      text: 'Message',
      icon: <MessageIcon />,
      path: '/message',
      active: false,
    },
    {
      text: 'Setting',
      icon: <SettingsIcon />,
      path: '/setting',
      active: false,
    },
  ];

  const drawer = (
    <Box sx={{ 
      background: 'linear-gradient(145deg, #222831 0%, #31363F 100%)', 
      height: '100%', 
      color: '#EEEEEE',
      backdropFilter: 'blur(20px)',
      borderRight: '1px solid rgba(238, 238, 238, 0.1)'
    }}>
      <Toolbar sx={{ 
        borderBottom: '1px solid rgba(118, 171, 174, 0.2)',
        background: 'linear-gradient(135deg, rgba(118, 171, 174, 0.1) 0%, rgba(49, 54, 63, 0.1) 100%)',
        py: 2
      }}>
        <Typography 
          variant="h6" 
          noWrap 
          component="div" 
          sx={{
            fontWeight: 800,
            background: 'linear-gradient(135deg, #76ABAE 0%, #EEEEEE 50%, #76ABAE 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1.3rem',
            letterSpacing: '0.5px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          💰 FinLoopr
        </Typography>
      </Toolbar>
      <List sx={{ pt: 3, px: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1.5 }}>
            <ListItemButton
              selected={item.active && location.pathname === item.path}
              onClick={() => {
                if (item.active) {
                  navigate(item.path);
                  if (isMobile) {
                    setMobileOpen(false);
                  }
                }
              }}
              sx={{
                borderRadius: '12px',
                color: '#EEEEEE',
                py: 1.5,
                px: 2.5,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: item.active && location.pathname === item.path 
                    ? 'linear-gradient(135deg, rgba(118, 171, 174, 0.2) 0%, rgba(49, 54, 63, 0.2) 100%)'
                    : 'transparent',
                  zIndex: -1,
                  transition: 'all 0.3s ease',
                },
                '&:hover': {
                  backgroundColor: item.active ? 'rgba(118, 171, 174, 0.1)' : 'rgba(238, 238, 238, 0.05)',
                  transform: item.active ? 'translateX(4px)' : 'none',
                  '&::before': {
                    background: item.active 
                      ? 'linear-gradient(135deg, rgba(118, 171, 174, 0.15) 0%, rgba(49, 54, 63, 0.15) 100%)'
                      : 'rgba(238, 238, 238, 0.05)',
                  }
                },
                '&.Mui-selected': {
                  backgroundColor: 'transparent',
                  borderLeft: '4px solid #76ABAE',
                  borderRadius: '0 12px 12px 0',
                  ml: -0.5,
                  pl: 2,
                  '&::before': {
                    background: 'linear-gradient(135deg, rgba(118, 171, 174, 0.25) 0%, rgba(49, 54, 63, 0.25) 100%)',
                  },
                  '&:hover': {
                    '&::before': {
                      background: 'linear-gradient(135deg, rgba(118, 171, 174, 0.3) 0%, rgba(49, 54, 63, 0.3) 100%)',
                    }
                  },
                },
                '&:disabled': {
                  opacity: 0.5,
                  cursor: 'not-allowed',
                }
              }}
              disabled={!item.active}
            >
              <ListItemIcon sx={{ 
                color: item.active && location.pathname === item.path ? '#76ABAE' : 
                       item.active ? 'rgba(238, 238, 238, 0.9)' : 'rgba(238, 238, 238, 0.4)',
                minWidth: 45,
                transition: 'all 0.3s ease',
                '& .MuiSvgIcon-root': {
                  fontSize: '22px',
                  filter: item.active && location.pathname === item.path 
                    ? 'drop-shadow(0 2px 4px rgba(118, 171, 174, 0.4))'
                    : 'none'
                }
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  color: item.active && location.pathname === item.path ? '#76ABAE' : 
                         item.active ? '#EEEEEE' : 'rgba(238, 238, 238, 0.5)',
                  '& .MuiListItemText-primary': {
                    fontSize: '0.95rem',
                    fontWeight: item.active && location.pathname === item.path ? 700 : 
                               item.active ? 500 : 400,
                    letterSpacing: '0.3px',
                    transition: 'all 0.3s ease',
                  }
                }} 
              />
              {!item.active && (
                <Box sx={{
                  ml: 'auto',
                  px: 1,
                  py: 0.3,
                  borderRadius: '6px',
                  backgroundColor: 'rgba(238, 238, 238, 0.1)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: 'rgba(238, 238, 238, 0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Soon
                </Box>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ 
      display: 'flex', 
      background: 'linear-gradient(145deg, #222831 0%, #31363F 100%)', 
      minHeight: '100vh' 
    }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: 'linear-gradient(135deg, rgba(34, 40, 49, 0.95) 0%, rgba(49, 54, 63, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(118, 171, 174, 0.1)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              mr: 2, 
              display: { sm: 'none' },
              color: '#EEEEEE',
              '&:hover': {
                backgroundColor: 'rgba(118, 171, 174, 0.1)',
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            noWrap 
            component="div" 
            sx={{ 
              flexGrow: 1,
              color: '#EEEEEE',
              fontWeight: 600,
              fontSize: '1.1rem',
              letterSpacing: '0.5px'
            }}
          >
            Wealth Management
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography 
              variant="body2" 
              sx={{ 
                mr: 1, 
                display: { xs: 'none', sm: 'block' },
                color: 'rgba(238, 238, 238, 0.8)',
                fontWeight: 500
              }}
            >
              {user?.name || user?.email}
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{
                color: '#EEEEEE',
                '&:hover': {
                  backgroundColor: 'rgba(118, 171, 174, 0.1)',
                }
              }}
            >
              <Avatar sx={{ 
                width: 36, 
                height: 36,
                background: 'linear-gradient(135deg, #76ABAE 0%, #5E898C 100%)',
                border: '2px solid rgba(238, 238, 238, 0.1)',
                color: '#EEEEEE',
                fontWeight: 600
              }}>
                <AccountCircle sx={{ fontSize: 24 }} />
              </Avatar>
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
              onClose={handleProfileMenuClose}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  background: 'linear-gradient(145deg, #31363F 0%, #222831 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(118, 171, 174, 0.2)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  color: '#EEEEEE',
                  minWidth: 180,
                  '& .MuiMenuItem-root': {
                    color: '#EEEEEE',
                    py: 1.5,
                    px: 2,
                    borderRadius: '8px',
                    mx: 1,
                    my: 0.5,
                    '&:hover': {
                      backgroundColor: 'rgba(118, 171, 174, 0.1)',
                    },
                    '& .MuiListItemIcon-root': {
                      color: '#76ABAE',
                      minWidth: 36,
                    }
                  },
                  '& .MuiDivider-root': {
                    borderColor: 'rgba(118, 171, 174, 0.2)',
                    mx: 1,
                  }
                }
              }}
            >
              <MenuItem onClick={handleProfileMenuClose}>
                <ListItemIcon>
                  <AccountCircle fontSize="small" />
                </ListItemIcon>
                Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              background: 'linear-gradient(145deg, #222831 0%, #31363F 100%)',
              borderRight: '1px solid rgba(118, 171, 174, 0.1)',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              background: 'linear-gradient(145deg, #222831 0%, #31363F 100%)',
              borderRight: '1px solid rgba(118, 171, 174, 0.1)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: 'linear-gradient(145deg, #222831 0%, #31363F 100%)',
          minHeight: '100vh',
          color: '#EEEEEE',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

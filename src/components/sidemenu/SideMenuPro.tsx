
'use client'
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import styles from './sidemenu.module.css';

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window,
  children: any
}

export default function SideMenuPro(props: Props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => { }


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Sidebar className={styles.sidebar} width="240px" collapsed={collapsed} collapsedWidth="80px" transitionDuration={300}>
      <div className={styles.sidebarHeader}>
        <Menu>
          <MenuItem className={styles.hamburgerMenu} icon={<MenuRoundedIcon />} onClick={toggleSidebar} />
        </Menu>
      </div>


      <Menu>
        <Link href="/dashboard" className={styles.link}><MenuItem icon={<HomeIcon />} className={styles.menuItem}>Dashboard</MenuItem></Link>
        <SubMenu label="Reports" icon={<DashboardIcon />} className={styles.menuItem}>
          <MenuItem icon={<AssessmentIcon />} className={styles.subMenuItem}>Overview</MenuItem>
          <MenuItem icon={<AssessmentIcon />} className={styles.subMenuItem}>Detailed Reports</MenuItem>
        </SubMenu>

        <Link href="/projects" className={styles.link}><MenuItem icon={<WorkIcon />} className={styles.menuItem}>Projects</MenuItem></Link>
        <MenuItem icon={<WorkIcon />} className={styles.menuItem}>Tasks</MenuItem>

        <SubMenu label="Settings" icon={<SettingsIcon />} className={styles.menuItem}>
          <MenuItem icon={<SettingsIcon />} className={styles.subMenuItem}>General</MenuItem>
          <MenuItem icon={<AccountCircleIcon />} className={styles.subMenuItem}>Profile</MenuItem>
        </SubMenu>

        <MenuItem icon={<ExitToAppIcon />} className={styles.LogOutmenuItem}>Log out</MenuItem>
      </Menu>
    </Sidebar>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

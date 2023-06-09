import React from "react";

import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewIcon from "@mui/icons-material/GridView";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import "./sidebar.css";

const drawerWidth = "240px";
const SideBarItems = [
    { id: 1, name: '대시보드', link: '/', icon: <GridViewIcon sx={{ color: '#1976d2' }} /> },
    { id: 2, name: '이미지 관리', link: '/analysis', icon: <ImageSearchIcon sx={{ color: '#1976d2' }} /> },
    { id: 3, name: '공지사항', link: '/notice', icon: <ImageSearchIcon sx={{ color: '#1976d2' }} /> },
    { id: 4, name: '관리자 계정 조회', icon: <ImageSearchIcon sx={{ color: '#1976d2' }} /> },
    { id: 5, name: '관리자 계정 생성', icon: <ImageSearchIcon sx={{ color: '#1976d2' }} /> },
    { id: 99, name: '게시판', link: '/board', icon: <ImageSearchIcon sx={{ color: '#1976d2' }} /> },
]

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar sx={{width:"100%", background: "white" }}>
        <Typography variant="h6" fontWeight={600} component={Link} color="black" sx={{ textDecoration: "none" }} align="center" to="/">
          SuperFinder Admin
        </Typography>
      </Toolbar>
      <Divider />
      <br/>
      <List>
        {
          SideBarItems.map((menu) => (
            <ListItem key={menu.id} disablePadding component={Link} to={menu.link}>
              <ListItemButton>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: "13px", color: "black", fontWeight: 600}} primary={menu.name}/>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  );
};

export default Sidebar;

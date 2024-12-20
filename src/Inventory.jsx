import React from "react";
import { Box, Button, CssBaseline, Drawer, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Inventory = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#1e293b",
            color: "white",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Adminify
          </Typography>
        </Toolbar>
        <Box sx={{ overflow: "auto", padding: 2 }}>
          {/* Buttons */}
          <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: 1 }}>
            Dashboard
          </Button>
          <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: 1 }} onClick={() => navigate("/assets")}>
            Assets
          </Button>
          <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: 1 }}>
            Reports
          </Button>
          <Button variant="contained" color="primary" fullWidth>
            Settings
          </Button>
        </Box>
      </Drawer>
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f5f5f5",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Typography variant="h4">Main Content Area</Typography>
        <Typography variant="body1">
          This is where the main content of the application will appear.
        </Typography>
      </Box>
    </Box>
  );
};

export default Inventory;

import React from "react";
import "./HomePage.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Workspace from "../src/asstes/Workspace.png";
import Assert from "../src/asstes/Assert.png";
import Medicine from "../src/asstes/Medicine.png";
import Library from "../src/asstes/Library.png";
import Playarea from "../src/asstes/PlayArea.png";
import AnnouncementImg from "../src/asstes/AnnouncementImg.png";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import ApprovalIcon from "@mui/icons-material/CheckCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
      }}
    >
      {/* Sidebar */}
      <div className="sidebar">
        <Box
          sx={{
            width: 230,

            backgroundColor: "#2e3b4e",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 32,
            padding: 2,
          }}
        >
          <Typography className="AdminifyBar" variant="h6" sx={{ mb: 3 }}>
            ⚡ Adminify
          </Typography>
          <ul
            className="sidebar-menu"
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
            }}
          >
            {[
              { icon: <HomeIcon />, text: "Home" },
              { icon: <HistoryIcon />, text: "History" },
              { icon: <ApprovalIcon />, text: "My Approvals" },
              { icon: <SettingsIcon />, text: "Settings" },
              { icon: <InfoIcon />, text: "Info" },
              { icon: <ContactMailIcon />, text: "Contact Us" },
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  padding: "12px 0",
                  cursor: "pointer",
                  fontSize: "15px",
                  listStyle: "none",
                  position: "relative",
                  bottom: 150,
                }}
              >
                {item.icon}
                <span style={{ marginLeft: "10px" }}>{item.text}</span>{" "}
                {/* Adds space between icon and text */}
              </li>
            ))}
          </ul>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Admin Dashboard
          </Typography>
        </Box>
      </div>

      {/* Main Content */}

      <Box sx={{ flex: 1, padding: 3 }}>
        {/* Welcome Banner */}
        <div className="welcome-banner">
          <Typography color="white" padding={2} variant="h5" sx={{ mt: 3 }}>
            WELCOME BACK MOHANRAJ
          </Typography>
        </div>
        <div className="AnnouncementCard">
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={AnnouncementImg}
              title="Gallery"
            />
          </Card>
          <Box
            sx={{
              backgroundColor: "#e0e0e0",
              height: 150,
              mt: 2,
              borderRadius: 1,
            }}
          ></Box>
        </div>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Quick Actions
        </Typography>

        <Box
          className="ImageCards"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },

            mt: 1,
          }}
        >
          {[
            { title: "Workspace", image: Workspace },
            {
              title: "Asset Management",
              image: Assert,
            },
            { title: "Meddi assist", image: Medicine },
            { title: "Library", image: Library },
            { title: "Play Area", image: Playarea },
          ].map((item) => (
            <Card key={item.title} sx={{ maxWidth: "70%", height: "90%" }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography
                  fontSize={15}
                  paddingBottom={2}
                  fontWeight={"bold"}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
"use client";
import * as React from "react";
import Link from "next/link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import LogoWash from "@/public/assets/LogoWash.svg";
import { AppBar, Typography } from "@mui/material";

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const openGithub = () => {
    window.open(
      "https://github.com/arlette-o",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/arlette-olalde-75a3a7234/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <AppBar position="sticky" color="inherit">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "12vh",
          padding: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <LogoWash />
          <Typography sx={{ margin: 2 }}> LaundroMapp </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            alignContent: "center",
          }}
        >
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Home" component={Link} href="/" />
            <Tab label="Machines" component={Link} href="/machines" />
            <Tab label="Delivery Service" component={Link} href="/delivery" />
            <Tab label="Fluff and Fold" component={Link} href="/fluffnfold" />
            <Tab label="Laundry Tips" component={Link} href="/tips" />
          </Tabs>
        </Box>
        <IconButton sx={{ mr: 2 }} onClick={openGithub}>
          <GitHubIcon fontSize={"large"} sx={{ color: "#214B6F" }} />
        </IconButton>
        <IconButton onClick={openLinkedIn}>
          <LinkedInIcon fontSize={"large"} sx={{ color: "#214B6F" }} />
        </IconButton>
      </Box>
    </AppBar>
  );
}

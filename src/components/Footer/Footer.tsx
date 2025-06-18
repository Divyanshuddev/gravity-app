import { Box, Stack, Typography } from "@mui/material";
import logo from "../../assets/Navbar/logo.svg";
const styles = {
  root: {
    width: "100%",
    height: "50vh",
    boxSizing: "border-box",
    padding: {
      lg: 15,
      md: 15,
      sm: 10,
      xs: 10,
    },
    
  },
  logo: {
    width: 150,
    height: 150,
    objectFit: "contain",
  },
};
const Footer = () => {
  return (
    <Stack
      sx={styles.root}
      direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack spacing={{ lg: 8, md: 8, sm: 4, xs: 4 }}>
        <Stack spacing={2}>
          <Typography>GRAVITY TEAM</Typography>
          <Typography color="gray">About Us</Typography>
          <Typography color="gray">Work with Us</Typography>
        </Stack>
        <Typography>Terms of Use & Privacy Policy</Typography>
      </Stack>
      <Stack
        alignItems={{
          lg: "flex-end",
          md: "flex-end",
          sm: "flex-start",
          xs: "flex-start",
        }}
        spacing={{ lg: 10, md: 10, sm: 4, xs: 4 }}
      >
        <Box component={"img"} src={logo} sx={styles.logo} />
        <Typography>©2022 Gravity Team. All Rights Reserved</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;

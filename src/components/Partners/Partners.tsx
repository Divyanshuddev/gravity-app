import { Box, Stack, Typography } from "@mui/material";
import blur from "../../assets/Marketing/bg2.svg";
import icon1 from "../../assets/Partner/icon1.svg";
import icon2 from "../../assets/Partner/icon2.svg";
import icon3 from "../../assets/Partner/icon3.svg";
import partnerImage from "../../assets/Partner/PartnerImage.svg";
const styles = {
  root: {
    width: "100%",
    minHeight: "150vh",
    maxHeight: "auto",
  },
  blurStack: {
    backgroundImage: `url(${blur})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    width: "100%",
    height: {
      lg: 750,
      md: 750,
      sm: 600,
      xs: 600,
    },
  },
  icons1: {
    width: {
      lg: 80,
      md: 70,
      sm: 40,
      xs: 40,
    },
    height: {
      lg: 80,
      md: 70,
      sm: 40,
      xs: 40,
    },
    objectFit: "contain",
  },
  icons2: {
    width: {
      lg: 80,
      md: 70,
      sm: 40,
      xs: 40,
    },
    height: {
      lg: 80,
      md: 70,
      sm: 40,
      xs: 40,
    },
    objectFit: "contain",
  },
  icons3: {
    width: {
      lg: 80,
      md: 70,
      sm: 40,
      xs: 40,
    },
    height: {
      lg: 80,
      md: 70,
      sm: 40,
      xs: 40,
    },
    objectFit: "contain",
  },
  textStyles: {
    fontSize: {
      lg: 60,
      md: 60,
      sm: 40,
      xs: 40,
    },
    fontFamily: "inter",
  },
  image: {
    width: "100%",
    height: {
      lg: 900,
      md: 800,
      sm: 500,
      xs: 400,
    },
    objectFit:"contain",
    marginTop: {
      lg: 60,
      md: 50,
      sm: 30,
      xs: 30,
    },
  },
};
const Partners = () => {
  return (
    <Stack
      sx={styles.root}
      direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
      alignItems={"center"}
    >
      <Stack width={{ lg: "50%", md: "50%", sm: "100%", xs: "100%" }}>
        <Stack
          alignSelf={"flex-start"}
          sx={styles.blurStack}
          mx={{ lg: -30, md: -30, sm: -10, xs: -10 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            component={"img"}
            src={icon1}
            sx={styles.icons1}
            alignSelf={"center"}
          />
          <Box
            component={"img"}
            src={icon2}
            sx={styles.icons2}
            alignSelf={"center"}
            marginLeft={{ lg: 20, md: 20, sm: 10, xs: 10 }}
          />
          <Box
            component={"img"}
            src={icon3}
            sx={styles.icons3}
            alignSelf={"center"}
          />
        </Stack>
        <Stack
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          my={-20}
        >
          <Typography sx={styles.textStyles}>Our Partners</Typography>
          <Typography sx={styles.textStyles}>& Friends</Typography>
        </Stack>
      </Stack>
      <Stack width={{ lg: "50%", md: "50%", sm: "100%", xs: "100%" }}>
        <Box component={"img"} src={partnerImage} sx={styles.image} />
      </Stack>
    </Stack>
  );
};

export default Partners;

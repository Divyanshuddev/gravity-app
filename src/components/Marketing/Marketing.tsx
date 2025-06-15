import { Stack, Typography } from "@mui/material";
import MarketingDetails from "./MarketingDetails";

const styles = {
  root: {
    width: "100%",
    minHeight: "100vh",
    maxHeight: "auto",
  },
  mainHeading: {
    fontSize:{
      lg:60,
      md:50,
      sm:30,
      xs:30
    },
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  detailStack: {
    width:{
      lg:"30%",
      md:"30%",
      sm:"80%",
      xs:"80%"
    },
  },
  detailTextStyles:{
    color:"gray",
    textAlign:"center"
  }
};
const Marketing = () => {
  return (
    <Stack sx={styles.root} spacing={{lg:2,md:2,sm:2,xs:2}}>
      <Stack justifyContent={"center"} alignItems={"center"} spacing={3}>
        <Typography sx={styles.mainHeading}>Crypto Market Making</Typography>
        <Stack sx={styles.detailStack} alignItems={'center'} justifyContent={'center'}>
          <Typography sx={styles.detailTextStyles}>
            We are a global crypto liquidity provider and algorithmic market
            maker. We trade digital assets listed on Centralized Exchanges in
            over 15 countries worldwide.
          </Typography>
        </Stack>
      </Stack>
      <MarketingDetails />
    </Stack>
  );
};

export default Marketing;

import { Stack, Typography } from "@mui/material";
import Cursor from "./Cursor";

const styles = {
  root: {
    width: "100%",
    minHeight: "130vh",
    maxHeight:"auto"

  },
  mainHeading: {
    fontSize: {
      lg:50,
      md:50,
      sm:25,
      xs:25
    },
    fontFamily: "Inter",
  },
  desc: {
    color: "gray",
    textAlign:"center"
  },
};

const KeyBenefits = () => {
  return (
    <Stack sx={styles.root} alignItems={"center"} spacing={2}>
      <Typography sx={styles.mainHeading}>We are in a good company</Typography>
      <Stack width={{lg:"30%",md:"30%",sm:"80%",xs:"80%"}} justifyContent={"center"} alignItems={"center"}>
        <Typography sx={styles.desc}>
          Our partnerships have delivered great value to our projects and
        </Typography>
        <Typography sx={styles.desc}>
          we’re happy to share some of their feedback below
        </Typography>
      </Stack>
      <Cursor />
    </Stack>
  );
};

export default KeyBenefits;

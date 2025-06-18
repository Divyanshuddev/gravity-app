import { Stack, Typography } from "@mui/material";
import blur from "../../assets/Join/blur.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const styles = {
  root: {
    width: "100%",
    height: "100vh",
  },
  container1: {
    backgroundImage: `url(${blur})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: {
      lg:800,
      md:600,
      sm:350,
      xs:350
    },
    height: {
      lg:800,
      md:600,
      sm:350,
      xs:350
    },


  },
  textStyles: {
    fontSize: {
      lg:70,
      md:70,
      sm:45,
      xs:45
    },
  },
  detailText: {
    fontSize: 20,
  },
  buttonStack: {
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid #D2AB67",
    width: "fit-content",
    cursor: "pointer",
  },
  buttonText: {
    fontSize: {
      lg:18,
      md:16,
      sm:15,
      xs:15
    },
  },
};
const Join = () => {
  return (
    <Stack
      sx={styles.root}
      direction={{lg:"row",md:"row",sm:"column",xs:"column"}}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Stack
        sx={styles.container1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack>
          <Typography sx={styles.textStyles}>Join</Typography>
          <Typography sx={styles.textStyles}>Gravity Team</Typography>
        </Stack>
      </Stack>
      <Stack width={{lg:'25%',md:"25%",sm:"80%",xs:"80%"}} spacing={3}>
        <Typography sx={styles.detailText}>
          Join our community of innovators, problem solvers and owners who apply
          scientific discovery techniques to make crypto markets a better place
          for everyone.
        </Typography>
        <Typography sx={styles.detailText}>
          As we emphasize it in our name – Gravity Team, we are a team. A team
          of bright, talented people, each masters of their specialty, curious
          about the world and eager to solve the new exciting cryptocurrency
          market problems, build cool stuff and have fun whilst doing so!
        </Typography>
        <Stack direction={"row"} alignItems={"center"}>
          <Stack
            component={"button"}
            sx={styles.buttonStack}
            direction={"row"}
            alignItems={"center"}
            spacing={2}
          >
            <Typography sx={styles.buttonText}>
              Learn more about working with us
            </Typography>
          </Stack>
          <ArrowForwardIcon style={{ color: "#D2AB67" }} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Join;

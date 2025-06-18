import { Grid, Stack, Typography } from "@mui/material";

const styles = {
  root: {
    width: "100%",
    minHeight: "100vh",
    maxHeight: "auto",
  },
  textStyles: {
    fontSize: {
      lg: 60,
      md: 50,
      sm: 30,
      xs: 30,
    },
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  details: {
    width: {
      lg: "30%",
      md: "30%",
      sm: "75%",
      xs: "80%",
    },
    fontSize: {
      lg: 13,
      md: 14,
      sm: 16,
      xs: 16,
    },
    color: "gray",
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  detailStack: {
    width: "50%",
  },
  card: {
    boxSizing: "border-box",
    padding: 2,
    height: 150,
    "&:hover": {
      background:
        "linear-gradient(90deg, rgba(102, 93, 205, 1) 0%, rgba(95, 164, 230, 1) 45%, rgba(210, 171, 103, 1) 100%)",
    },
  },
  mainCard: {
    "& > :nth-child(1)": {
      borderRight: {
        lg: "1px solid #665DCD",
        md: "1px solid #665DCD",
        sm: "none",
        xs: "none",
      },
      borderBottom: "1px solid #665DCD",
    },
    "& > :nth-child(2)": {
      borderRight: {
        lg: "1px solid #665DCD",
        md: "1px solid #665DCD",
        sm: "none",
        xs: "none",
      },
      borderBottom: "1px solid #665DCD",
    },
    "& > :nth-child(3)": {
      borderRight: {
        lg: "1px solid #665DCD",
        md: "1px solid #665DCD",
        sm: "none",
        xs: "none",
      },
      borderBottom: "1px solid #665DCD",
    },
    "& > :nth-child(4)": {
      borderRight: {
        lg: "none",
        md: "none",
        sm: "none",
        xs: "none",
      },
      borderBottom: "1px solid #665DCD",
    },
    "& > :nth-child(5)": {
      borderRight: {
        lg: "1px solid #665DCD",
        md: "1px solid #665DCD",
        sm: "none",
        xs: "none",
      },
      borderBottom: {
        xs: "1px solid #665DCD",
        sm: "1px solid #665DCD",
        md: "none",
        lg: "none",
      },
    },
    "& > :nth-child(6)": {
      borderRight: {
        lg: "1px solid #665DCD",
        md: "1px solid #665DCD",
        sm: "none",
        xs: "none",
      },
      borderBottom: {
        xs: "1px solid #665DCD",
        sm: "1px solid #665DCD",
        md: "none",
        lg: "none",
      },
    },
    "& > :nth-child(7)": {
      borderRight: {
        lg: "1px solid #665DCD",
        md: "1px solid #665DCD",
        sm: "none",
        xs: "none",
      },
      borderBottom: {
        xs: "1px solid #665DCD",
        sm: "1px solid #665DCD",
        md: "none",
        lg: "none",
      },
    },
  },
};
const cardsData = [
  {
    title: "~$100 billion",
    details: "cumulative trading volume to date",
  },
  {
    title: "0.8%",
    details: "of the global crypto spot trading volume",
  },
  {
    title: "~30",
    details: "Gravity Teammates (& growing)",
  },
  {
    title: "25+",
    details: "leading global and local crypto exchanges",
  },
  {
    title: "2017",
    details: "start, crypto-natives",
  },
  {
    title: "1,200+",
    details: "crypto-asset pairs",
  },
  {
    title: "24/7",
    details: "liquidity",
  },
  {
    title: "5 billion+",
    details: "trades done to date",
  },
];
const About = () => {
  return (
    <Stack sx={styles.root} justifyContent={"center"} alignItems={"center"}>
      <Typography sx={styles.textStyles}>About Gravity Team</Typography>
      <Typography sx={styles.details}>
        At Gravity Team, we are on the mission to balance the supply and demand
        across crypto markets worldwide. We are a crypto native market maker
        founded by traders, developers, and innovators who are strong believers
        and supporters of the future of decentralization and digital assets.
      </Typography>
      <Grid container spacing={0} width={"80%"} sx={styles.mainCard}>
        {cardsData.map((value, index) => {
          return (
            <Grid size={{ lg: 3, md: 3, sm: 12, xs: 12 }} key={index}>
              <Stack
                alignItems={"center"}
                sx={styles.card}
                justifyContent={"center"}
              >
                <Typography sx={styles.title}>{value.title}</Typography>
                <Stack
                  sx={styles.detailStack}
                  alignItems={"center"}
                  textAlign={"center"}
                >
                  <Typography>{value.details}</Typography>
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default About;

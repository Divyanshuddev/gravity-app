import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import backward from "../../assets/KeyBenefits/backArrow.svg";
import forward from "../../assets/KeyBenefits/forwardArrow.svg";
import bitKub from "../../assets/KeyBenefits/bitkub.svg";
import { useState } from "react";
const styles = {
  icons: {
    width: {
      lg:70,
      md:70,
      sm:50,
      xs:50
    },
    height:{
      lg:70,
      md:70,
      sm:50,
      xs:50
    },
    objectFit: "contain",
  },
  button: {
    "&:hover": {
      backgroundColor: "#141619",
    },
  },
  details: {
    fontSize: {
      lg:30,
      md:30,
      sm:20,
      xs:20
    },
    textAlign: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  bitKub: {
    width: {
      lg:70,
      md:70,
      sm:100,
      xs:100
    },
    height: {
      lg:70,
      md:70,
      sm:100,
      xs:100
    },
    objectFit: "contain",
  },
  dotsStyles: {
    backgroundColor: "#333333",
    width: 15,
    height: 15,
    borderRadius: "50%",
  },
};
const data = [
  {
    details:
      "Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
    name: "Atthakrit Chimplapibul",
  },
  {
    details:
      "AI refers to the general concept of building machines that can perform tasks that are normally done by humans, such as learning, reasoning, and problem-solving. AI encompasses a wide range of techniques and approaches, including machine learning, deep learning, and rule-based systems. ",
    name: "Divyanshu Sharma",
  },
  {
    details:
      "Blockchain is a decentralized, distributed, and public digital ledger that records transactions across many computers, ensuring immutability and transparency. It's like a digital notebook shared with many people, where each page (or block) contains a list of recent transactions. Every block is linked to the previous one using cryptography, creating a chronological chain of records. ",
    name: "Tejaswa Srivastava",
  },
];
const Cursor = () => {
  const [index, setIndex] = useState<number>(0);
  const handleBackward = () => {
    if (index <= 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  };
  const handleForward = () => {
    if (index >= 2) {
      setIndex(2);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <Stack alignItems={"center"} spacing={7}>
      <Stack direction={"row"} alignItems={"center"} spacing={4}>
        <Button
          variant="text"
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
          sx={styles.button}
          onClick={handleBackward}
        >
          <Box component={"img"} src={backward} sx={styles.icons} />
        </Button>
        <Button
          variant="text"
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
          sx={styles.button}
          onClick={handleForward}
        >
          <Box component={"img"} src={forward} sx={styles.icons} />
        </Button>
      </Stack>
      <Stack width={{lg:"30%",md:"30%",sm:"80%",xs:"80%"}}spacing={4} alignItems={"center"}>
        <Typography sx={styles.details}>{data[index].details}</Typography>
        <Typography sx={styles.name}>{data[index].name}</Typography>
        <Stack direction={"row"} alignItems={"center"} spacing={5}>
          <Typography fontWeight={"lighter"}>
            Co-founder & CEO of BitKub
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "gray" }}
          />
          <Box component={"img"} src={bitKub} sx={styles.bitKub} />
        </Stack>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Box
          sx={styles.dotsStyles}
          component={"div"}
          style={{
            background:
              index == 0
                ? "linear-gradient(90deg, rgba(102, 93, 205, 1) 0%, rgba(95, 164, 230, 1) 45%, rgba(210, 171, 103, 1) 100%)"
                : "#333333",
          }}
        />
        <Box
          sx={styles.dotsStyles}
          component={"div"}
          style={{
            background:
              index == 1
                ? "linear-gradient(90deg, rgba(102, 93, 205, 1) 0%, rgba(95, 164, 230, 1) 45%, rgba(210, 171, 103, 1) 100%)"
                : "#333333",
          }}
        />
        <Box
          sx={styles.dotsStyles}
          component={"div"}
          style={{
            background:
              index == 2
                ? "linear-gradient(90deg, rgba(102, 93, 205, 1) 0%, rgba(95, 164, 230, 1) 45%, rgba(210, 171, 103, 1) 100%)"
                : "#333333",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Cursor;

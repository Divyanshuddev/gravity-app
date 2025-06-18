import { Box, Stack, Typography } from "@mui/material";
import blur1 from "../../assets/ContactUs/blur1.svg";
import blur2 from "../../assets/ContactUs/blur2.svg";
import blur3 from "../../assets/ContactUs/blur3.svg";
import blur4 from "../../assets/ContactUs/blur4.svg";
import GetInTouchButton from "../GetInTouchButton/GetInTouchButton";

const styles = {
  root: {
    width: "100%",
    minHeight: "70vh",
    maxHeight:"auto",
    marginTop:{
      lg:0,
      md:0,
      sm:10,
      xs:10
    }
  },
  blur1: {
    width: "30%",
    height: 800,
    objectFit: "contain",
    display:{
      lg:"flex",
      md:"flex",
      sm:"none",
      xs:"none"
    }
  },
  blur2: {
    width: "100%",
    height: 700,
    objectFit: "cover",
     display:{
      lg:"flex",
      md:"flex",
      sm:"none",
      xs:"none"
    }
  },
  blur3: {
    width: "100%",
    height: 400,
    objectFit: "cover",
     display:{
      lg:"flex",
      md:"flex",
      sm:"none",
      xs:"none"
    }
    
  },
  blur4: {
    width: "100%",
    height: 400,
    objectFit: "cover",
     display:{
      lg:"flex",
      md:"flex",
      sm:"none",
      xs:"none"
    }
    
  },
  contactStack: {
    width:{
      lg:"30%",
      md:"30%",
      sm:"80%",
      xs:"80%"
    },
    zIndex:100
  },
  contactText:{
    fontSize:{
      lg:60,
      md:50,
      sm:35,
      xs:35
    }
  }
};
const Contact = () => {
  return (
    <div id="contact">
    <Stack
      sx={styles.root}
      direction={{lg:"row",md:"row",sm:"column",xs:"column"}}
      alignItems={"center"}
      justifyContent={"space-between"}
      
    >
      <Box component={"img"} src={blur1} sx={styles.blur1} zIndex={0} />

      <Stack sx={styles.contactStack} alignItems={'center'} spacing={5}>
        <Typography sx={styles.contactText}>Contact Us</Typography>
        <Stack  alignItems={'center'} textAlign={'center'}>
        <Typography>We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!</Typography>
        </Stack>
        <GetInTouchButton />
      </Stack>

      <Stack zIndex={0} width={'30%'} spacing={-40} display={{
      lg:"flex",
      md:"flex",
      sm:"none",
      xs:"none"
      }}>
        <Box component={"img"} src={blur3} sx={styles.blur3} mx={0}  />
        <Box component={"img"} src={blur2} sx={styles.blur2} />
        <Box component={"img"} src={blur4} sx={styles.blur4} mx={900} />
      </Stack>
      
    </Stack>
    </div>
  );
};

export default Contact;

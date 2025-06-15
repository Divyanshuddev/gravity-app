import { Stack, Typography } from "@mui/material"
import GetInTouchButton from "../GetInTouchButton/GetInTouchButton"
const styles={
    root:{
        width:"100%",
        height:{
            lg:"70vh",
            md:"60vh",
            sm:"50vh",
            xs:"50vh"
        },
    },
    textStyles:{
        fontFamily:"Inter",
        fontWeight:"bold",
        fontSize:{
            lg:100,
            md:80,
            sm:30,
            xs:30
        },
        color:"white"
    },
    details:{
        fontFamily:"Inter",
        fontSize:15,
        color:"gray",
        width:{
            lg:"50%",
            md:"60%",
            sm:"70%",
            xs:"75%"
        },
        textAlign:"center"
    }
}
const HeroSection = () => {
  return (
    <Stack sx={styles.root}  alignItems={'center'} spacing={{lg:20,md:18,sm:10,xs:10}}>
        <Stack alignItems={'center'}>
        <Typography sx={styles.textStyles}>Balance</Typography>
         <Typography sx={styles.textStyles}>Crypto Markets</Typography>
         <Typography sx={styles.details}>Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.</Typography>
         </Stack>
         <GetInTouchButton />
    </Stack>
  )
}

export default HeroSection
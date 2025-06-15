import { Box, Stack, Typography } from "@mui/material"
const styles={
    circle:{
        background: "linear-gradient(90deg, rgba(102, 93, 205, 1) 0%, rgba(95, 164, 230, 1) 45%, rgba(210, 171, 103, 1) 100%)",
        width:20,
        height:20,
        borderRadius:"50%"
    }
}
const GetInTouch = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <Box sx={styles.circle} />
        <Typography>Get In Touch</Typography>
    </Stack>
  )
}

export default GetInTouch
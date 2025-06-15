import { Button } from "@mui/material"

const styles={
  root:{
    background: "linear-gradient(90deg, rgba(102, 93, 205, 1) 0%, rgba(95, 164, 230, 1) 45%, rgba(210, 171, 103, 1) 100%)",
    fontSize:{
      lg:28,
      md:25,
      sm:20,
      xs:20
    }
  }
}
const GetInTouchButton = () => {
  return (
    <Button variant="contained" sx={styles.root} size="large">
      Get in Touch
    </Button>
  )
}

export default GetInTouchButton
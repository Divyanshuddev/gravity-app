import { Box } from "@mui/material"
import logo from '../../assets/Navbar/logo.svg'
const styles={
    root:{
        width:{
          lg:220,
          md:150,
          sm:100,
          xs:100
        },
        height:50,
        objectFit:"contain",
    }
}
const Logo = () => {
  return (
    <Box component={'img'} src={logo} sx={styles.root} />
  )
}

export default Logo
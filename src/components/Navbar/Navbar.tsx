import {  IconButton, Menu, MenuItem, Stack } from "@mui/material"
import Logo from "./Logo"
import MenuButtons from "./MenuButtons"
import GetInTouch from "./GetInTouch"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
const styles={
    root:{
        padding:3,
        
    }
};
const buttonMenu=[
    'About Us',
    'Our Services',
    'Work with Us',
    'Blog'
]
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={styles.root}>
        <Logo />
        <Stack display={{lg:"flex",md:"flex",sm:"none",xs:"none"}}>
        <MenuButtons />
        </Stack>
        <GetInTouch />
        <Stack display={{lg:"none",md:"none",sm:"flex",xs:"flex"}}>
          <IconButton
          id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
          >
            <MenuIcon style={{color:"white"}} />
          </IconButton>
           <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        {
          buttonMenu.map((value,index)=>{
            return(
              <MenuItem onClick={handleClose} key={index}>{value}</MenuItem>
            )
          })
        }
      </Menu>
        </Stack>
    </Stack>
  )
}

export default Navbar
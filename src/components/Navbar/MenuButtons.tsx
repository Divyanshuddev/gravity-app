import { Button, Stack } from "@mui/material"

const styles={
    root:{
        color:"white",
        fontSize:15,

    }
}
const buttonMenu=[
    'About Us',
    'Our Services',
    'Work with Us',
    'Blog'
]
const MenuButtons = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={2}>
        {
            buttonMenu.map((value,index)=>{
                return(
                    <a href="#contact">
                    <Button key={index} sx={styles.root}>
                        {value}
                    </Button>
                    </a>
                )
            })
        }
    </Stack>
  )
}

export default MenuButtons
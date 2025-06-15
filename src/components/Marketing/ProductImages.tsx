import { Box } from '@mui/material'

const style={
  root:{
    width:{
      lg:700,
      md:600,
      sm:350,
      xs:350
    },
    height:{
      lg:700,
      md:600,
      sm:350,
      xs:350
    },
    objectFit:"contain"
  }
}
type ProductImagesProps={
  img:string;
}
const ProductImages:React.FC<ProductImagesProps> = ({img}) => {
  return (
    <Box component={'img'} src={img} sx={style.root}  />
  )
}

export default ProductImages
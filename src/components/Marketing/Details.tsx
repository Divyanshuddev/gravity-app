import { Stack, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const styles = {
  firstHeading: {
    fontFamily: "Inter",
    fontSize: {
      lg:40,
      md:40,
      sm:20,
      xs:20
    },
  },
  secondTextStyles: {
    fontSize: 18,
  },
  detail: {
    fontFamily: "Inter",
    fontSize: 21,
  },
  buttonStack: {
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid #D2AB67",
    width: "fit-content",
    cursor:"pointer"
  },
  buttonText: {
    fontSize: 25,
  },
};

type DetailsProps={
  title:string;
  desc:string;
  details:string;
}
const Details:React.FC<DetailsProps> = ({title,desc,details}) => {
  return (
    <Stack width={{lg:"70%",
      md:"70%",
      sm:"100%",
      xs:"100%"}} spacing={2}>
      <Typography sx={styles.firstHeading}>
        {title}
      </Typography>
      <Typography sx={styles.secondTextStyles} style={{ fontWeight: "bolder" }}>
        {desc}
      </Typography>
      <Typography sx={styles.detail}>
        {details}
      </Typography>
      <Stack direction={'row'} alignItems={'center'}>
      <Stack component={"button"} sx={styles.buttonStack} direction={'row'} alignItems={'center'} spacing={2}>
        <Typography sx={styles.buttonText}>Learn more</Typography>
      </Stack>
      <ArrowForwardIcon style={{color:"#D2AB67"}} />
      </Stack>
    </Stack>
  );
};

export default Details;

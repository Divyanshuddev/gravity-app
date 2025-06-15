import { Stack } from "@mui/material";
import bg1 from "../../assets/Marketing/bg2.svg";
import bg2 from "../../assets/Marketing/bg1.svg";
import Details from "./Details";
import ProductImages from "./ProductImages";
import img1 from "../../assets/Marketing/detailImage1.svg";
import img2 from "../../assets/Marketing/detailImage2.svg";
const styles = {
  root: {},
  firstContainer: {
    backgroundImage: `url(${bg1})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    width: {
      lg: "50%",
      md: "50%",
      sm: "100%",
      xs: "100%",
    },
    height: {
      lg:700,
      md:600,
      sm:300,
      sx:300
    },
  },
  stack2: {
    backgroundImage: `url(${bg2})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    width: "100%",
    height: {
      lg:700,
      md:600,
      sm:300,
      sx:300
    },
    
  },
  innerData: {
    // position: "absolute",
    // left: 500,
    // top: 500,
  },
};
const data = [
  {
    title: "Market Making for Crypto Projects",
    desc: "Accelerate your token’s journey by boosting its liquidity",
    details:
      "We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise and network.",
  },
  {
    title: "Market Making for Crypto Exchanges",
    desc: "Attract more traders and projects with deep order books & liquidity",
    details:
      "Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% market dominance.",
  },
];

const MarketingDetails = () => {
  return (
    <Stack>
      <Stack
        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "center",
          xs: "center",
        }}
        alignItems={{lg:"center",md:"center",sm:"flex-end",xs:"flex-end"}}
        padding={{ lg: 20, md: 18, sm: 5, xs: 5 }}
        boxSizing={"border-box"}
      >
        <Stack
          sx={styles.firstContainer}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Details
            title={data[0].title}
            desc={data[0].desc}
            details={data[0].details}
          />
        </Stack>
        <ProductImages img={img1} />
      </Stack>

      <Stack sx={styles.stack2}>
        <Stack
         direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "center",
          xs: "center",
        }}
        alignItems={{lg:"center",md:"center",sm:"center",xs:"center"}}
        padding={{ lg: 20, md: 18, sm: 5, xs: 5 }}
        boxSizing={"border-box"}
        >
          <ProductImages img={img2} />
          <Details
            title={data[1].title}
            desc={data[1].desc}
            details={data[1].details}
          />
        </Stack>
      </Stack>


    </Stack>
  );
};

export default MarketingDetails;

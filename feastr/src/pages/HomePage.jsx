import { Box, Typography, Grid } from "@mui/material";
import { DATA } from "../data";
import RecommendationCard from "../components/RecommendationCard";

const HomePage = () => {
  const recommendationData = DATA.RECOMMEDATION;

  return (
    <div>
      {/** Recommendation Section */}
      <Grid container spacing={1} sx={{ padding: 2 }}>
        {/* Welcome Text */}
        <Grid item size={{xs:12, sm:12, md:12 ,lg:12 ,xl:12}}>
          <Typography variant="h4" align="left" fontWeight="bold">
            Welcome back, Bihari Ji
          </Typography>
        </Grid>

        {/* Recommendations Title */}
        <Grid item size={{xs:12, sm:12, md:12 ,lg:12 ,xl:12}}>
          <Typography variant="h6" align="left" fontWeight="700" fontStyle="bold">
            Recommendations for you
          </Typography>
        </Grid>

        {/* Recommendations Cards */}
        <Grid  size={{xs:12, sm:12, md:12 ,lg:12 ,xl:12}} >
          <Box
            display="flex"
            flexWrap="nowrap"
            height="200px"
            overflowX="auto"
            sx={{
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              // Apply breakpoints for width to show 2, 3, or 4 cards based on screen size
            }}
          >
            {recommendationData.map((data) => (
              <RecommendationCard
              key={data.id}
              data={data}
            />
            ))}
          </Box>
        </Grid>

        {/** Trending Section (you can add this as needed) */}
      </Grid>
    </div>
  );
};

export default HomePage;

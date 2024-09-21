import { useState, useEffect } from "react";
import { FetchApi } from "../Utils/FetchApi";
import { Box, Stack, Typography, Grid } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      sx={{ height: "100vh", overflow: "hidden" }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "250px" },
          height: "100%",
          borderRight: "1px solid #3d3d3d",
          px: 2,
          py: 1,
          backgroundColor: "#000",
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 2,
            color: "grey",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          Copyright 2024 | Mr.Shahzad.Developer
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          backgroundColor: "#000",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white", ml: { xs: 0, md: 3 } }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>

        {/* Grid for consistent layout */}
        <Grid container spacing={2}>
          <Videos videos={videos} />
        </Grid>
      </Box>
    </Stack>
  );
};

export default Feed;

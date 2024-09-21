import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";

import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard"; // Import VideoCard component
import { FetchApi } from "../Utils/FetchApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      // Fetch channel details
      const data = await FetchApi(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      // Fetch videos related to the channel
      const videosData = await FetchApi(`search?channelId=${id}&part=snippet,id&order=date`);
      
      // Filter to ensure only videos from the correct channel are displayed
      const filteredVideos = videosData?.items?.filter(video => video.snippet.channelId === id);
      setVideos(filteredVideos);
    };

    fetchResults();
  }, [id]);

  if (!channelDetail) return <Typography>Loading...</Typography>;

  return (
    <Box minHeight="95vh">
      <Box>
        {/* Render the channel's details using ChannelCard */}
        <ChannelCard channelDetail={channelDetail} />
      </Box>

      <Box p={2}>

        {/* Render videos related to the channel */}
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
          {videos.map((video, idx) => (
            <VideoCard key={idx} video={video} /> 
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ChannelDetail;

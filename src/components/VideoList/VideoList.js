import React from "react";

import { Grid } from "@material-ui/core";

import VideoItem from "../VideoItem/VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
  const listOfVideos = videos.map((video, key) => (
    <VideoItem onVideoSelect={handleVideoSelect} key={key} video={video} />
  ));
  return (
    <Grid container spacing={4}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;

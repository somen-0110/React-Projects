import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const list = props.videos.map((video) => {
    return (
      <VideoItem
        video={video}
        onVideoSelect={props.onVideoSelect}
        key={video.snippet.description}
      />
    );
  });
  return <div className="w-50 float-right">{list}</div>;
};

export default VideoList;

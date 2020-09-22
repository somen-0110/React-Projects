import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="p-2 media my-2 video-item rounded d-flex align-items-center"
      onClick={() => onVideoSelect(video)}
    >
      <img
        className="mr-3 rounded"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.description}
      />
      <div className="media-body">
        <h6 className="mt-0">{video.snippet.title}</h6>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;

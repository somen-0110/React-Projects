import React from "react";

const VideoPlayer = (props) => {
  if (!props.video) {
    return <div className="w-50">Loading</div>;
  } else {
    const src = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    return (
      <div className="card w-50 my-2 p-2">
        <iframe src={src} className="card-img-top h-50" title="youtube-video" />
        <div className="card-body">
          <h4 className="card-title">{props.video.snippet.title}</h4>
          <p className="card-text">{props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
};

export default VideoPlayer;

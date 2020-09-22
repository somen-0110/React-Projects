import React from "react";
import SearchBar from "./SearchBar";
import youtube from "./api/youtube";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

class App extends React.Component {
  state = { VideoList: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      VideoList: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  componentDidMount() {
    this.onTermSubmit("vibe hai");
  }
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className="d-flex w-100">
          <VideoPlayer video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.VideoList}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;

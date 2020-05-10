import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/Youtube";
import { SearchBar, VideoDetail, VideoList, Header } from "./components";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleVideoSearch("reactjs");
  }

  handleVideoSearch = async (term) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDxZyKcFLftbBM_dpjhge4iv2OuQ8TtZMg",
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleFastSearchClick = (videoSearchString) => {
    this.handleVideoSearch(videoSearchString);
  };

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div className="App">
        <Header handleFastSearchClick={this.handleFastSearchClick} />
        <Grid container justify="center" spacing={5}>
          <Grid container>
            <Grid item sm={1} />
            <Grid item xs={12} sm={10}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <SearchBar onFormSubmit={this.handleVideoSearch} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <VideoDetail video={selectedVideo} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <VideoList
                    videos={videos}
                    handleVideoSelect={this.handleVideoSelect}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={1} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

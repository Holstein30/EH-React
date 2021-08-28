import React, { Component } from "react";
import Carousel from "../../global/carousel";
import Parallax from "./Parallax";
import About from "./about";
import Background from "./background";
import Podcast from "./podcast";

class Main extends Component {
  render() {
    return (
      <main>
        <Carousel />
        <About />
        <Parallax class="fb-parallax-background" />
        <Background />
        <Parallax class="dendi-parallax-background" />
        <Podcast />
      </main>
    );
  }
}

export default Main;

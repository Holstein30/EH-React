import React, { Component } from "react";
import Card from "../../../global/cards";
import logo from "../../../images/eSports History-logo-edit.png";
import finalBossImage from "../../../images/13 - MLG FB MONEY.jpg";
import twinGalaxiesImage from "../../../images/27 - Twin Galaxies.jpg";

class Podcast extends Component {
  render() {
    const introBlurb =
      "The first episode of the Esports History Podcast that covers the entire history of esports. This is a great introduction to the world of esports and we highly recommend starting here.";
    const finalBossBlurb = `Long episode chronicalling the most dominant team in competetive Halo history "Final Boss" with special guest "Ogre
				2" who was one of the members of this legendary team. From their early day's before they were officially known as "Final
				Boss" until their last official tournament we talk about all the twists and turns through the years. This is a must see
                video for any fans of the team or Halo esports.`;
    const twinGalaxiesBlurb = `One of our biggest projects yet that covers the long history of Twin Galaxies and its role in the beginnings of competitve
				video gaming. Another must see piece of content that gives any esports fan some perspective on how far we've come.`;

    return (
      <section id="podcast" style={cardSectionStyle}>
        <h1 style={cardSectionH1Style}>Podcast Episodes</h1>
        <article className="cardContainerStyles" style={cardContainerStyle}>
          <Card
            image={logo}
            alt="esports history logo"
            title="The Entire History of Esports in Brief"
            blurb={introBlurb}
            audioSource=""
          />
          <Card
            image={finalBossImage}
            alt="final boss holding a check after winning the 2007 national championship in halo 2"
            title="Final Boss - A Halo Dynasty"
            blurb={finalBossBlurb}
            audioSource=""
          />
          <Card
            image={twinGalaxiesImage}
            alt="twin galaxies international scoreboard with many world record holders in the foreground"
            title="Twin Galaxies - An Esports Origin Story"
            blurb={twinGalaxiesBlurb}
            audioSource=""
          />
        </article>
      </section>
    );
  }
}

const cardSectionStyle = {
  padding: "2rem 0",
};

const cardSectionH1Style = {
  fontSize: "4rem",
  marginBottom: "0",
};

const cardContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
  maxWidth: "90vw",
  margin: "0 auto",
  padding: "2rem",
};

export default Podcast;

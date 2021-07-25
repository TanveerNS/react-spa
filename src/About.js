import React, { Component } from "react";
 let logo;
class About  extends Component {
   logo = "https://i.ibb.co/7kWPnNd/abstract-metallic-number-background-36845-85.jpg";


  render() {
    return (
      <div>
        <hr/>
        <h2>About</h2>
        <img src="https://i.ibb.co/7kWPnNd/abstract-metallic-number-background-36845-85.jpghttps://i.ibb.co/7kWPnNd/abstract-metallic-number-background-36845-85.jpg" width="100%" height="100%" alt={"logo"}/>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default About;
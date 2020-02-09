import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <div className="about-container">
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <p>
              Cozumel is like no other island in the world. Many visitors agree
              that it’s the most magnificent and charming vacation destination
              in Mexico. Cozumel is the premiere scuba diving and snorkeling
              destination in the world with its colorful, well-preserved coral
              reefs. These reefs are part of the Mesoamerican Barrier Reef
              System, the second largest in the world. Cozumel has vibrant white
              sand beaches that slide right into the dazzling, crystal blue
              Caribbean Ocean.
            </p>
            <p>
              Cozumel weather is lovely, with continuously warm temperatures all
              year round. Ocean temperatures are perfect for scuba divers and
              snorkelers at no less than 77°F. Cozumel’s weather isn’t the only
              thing that makes Cozumel the best island destination in the world
              but the consistency is a huge plus.
            </p>
          </Grid>
          <Grid item xs={6}>
            <img
              className="CozumelCarnival"
              src="CarnivalCozumel.jpg"
              alt="carnival"
            />
          </Grid>
          <Grid item xs={6}>
            <img className="Food" src="Food.jpg" alt="food" />
          </Grid>
          <Grid item xs={6}>
            <p>
              Cozumel is one of the safest places in Mexico and some say Cozumel
              is the safest vacation destination in the world. This is what
              makes Cozumel so unique and gives visitors the ability to get out
              of the resort and tourist areas and enjoy the splendors of what
              Mexico has to offer. Locals are friendly and kind, so it’s safe to
              walk around town, though you should always follow typical travel
              safety advice. As soon as you step off the plane at Cozumel’s
              airport or off the ferry from Playa Del Carmen, you’ll feel a
              charming, warm vibe as the sun thaws your body. You'll then
              realize why so many choose Cozumel as their travel destination and
              why so many return time and again to Dive GalaxSea!
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default About;

import _ from "lodash";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Grid } from "semantic-ui-react";
import { Button, Divider } from "semantic-ui-react";
import React, { useState } from "react";

const colors = ["red", "yellow", "green", "blue", "grey"];

function App() {
  return (
    <div className="App">
      <GridScore></GridScore>
      <GridTotalScore></GridTotalScore>
    </div>
  );
}

export default App;

function GridScore() {
  return (
    <Grid columns={5} padded>
      {colors.map((color) => (
        <Grid.Column color={color} key={color}>
          {_.capitalize(color)}
          <ScoreButtons></ScoreButtons>
        </Grid.Column>
      ))}
    </Grid>
  );
}

function ScoreButtons() {
  return (
    <div>
      <Divider />
      <Button.Group basic vertical>
        <Button>1</Button>

        <Button>2</Button>

        <Button>3</Button>
        <Button>4</Button>

        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>10</Button>
      </Button.Group>
    </div>
  );
}

function GridTotalScore() {
  return (
    <div>
      <Grid columns={5} padded>
        {colors.map((color) => (
          <Grid.Column color={color} key={color}>
            <Button>0</Button>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}

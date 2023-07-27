import React from "react";
import { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { StyledEngineProvider } from "@mui/material/styles";
export default class Image extends Component {
  render() {
    return (
      <StyledEngineProvider injectFirst>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "500px" }}
            image={this.props.src}
            key={this.props.img.id}
          />
          <CardContent>
            <Typography gutterBottom variant="h8" component="div">
              Captured by {this.props.img.user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.props.img.alt_description}
            </Typography>
          </CardContent>
        </Card>
      </StyledEngineProvider>
    );
  }
}

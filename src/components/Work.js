import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import bianale from "../img/bianale.png";
import space from "../img/space.png";
import paredon from "../img/paredon.png";
export class Work extends Component {
  render() {
    const cardArr = [
      {
        name: "The med biannale",
        id: "1",
        desc: "A website developed for a medditarenean artist of the biannale of israel.",
        img: bianale,
        author: "Built with React",

        href: "https://mediterraneanbiennale.herokuapp.com/",
      },
      {
        name: "Pacifico el paredon",
        id: "2",
        desc: "A website developed for an hostel in guatemala in el paredon",
        img: paredon,
        author: "Built with React",

        href: "https://www.pacificoelparedon.com/",
      },
      {
        name: "The space between",
        id: "3",
        desc: "A website developed for an israeli rock band",
        img: space,
        author: "Built with React",
        href: "https://thespacebetween.herokuapp.com/",
      },
    ];
    return (
      <section id="work">
        <Grid container className="workGrid" justifyContent="center">
          <Grid item xs={12} className="workText">
            <Grid container justifyContent="center">
              {cardArr.map((card) => {
                return (
                  <Grid
                    item
                    container
                    xs={12}
                    key={card.id}
                    sm={12}
                    md={4}
                    style={{ display: "flex", paddingBottom: "20px" }}
                    justifyContent="center"
                  >
                    <Card
                      bgColor={this.props.bgColor}
                      headerColor={this.props.headerColor}
                      title={card.name}
                      key={card.id}
                      author={card.author}
                      img={card.img}
                      desc={card.desc}
                      href={card.href}
                    ></Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default Work;

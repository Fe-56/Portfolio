import React, { useEffect } from "react";
import './About.css';
import * as d3 from 'd3';
import profilePicture from './profile_picture_portfolio.jpg';

const name = "Fuo En Lim";
const title = "Aspiring Full-Stack Developer";
const quote = "I love to build cool apps that bring value to the lives of others!";
const about = "Fuo En was born in Singapore in 1999. Since young, he has an interest in computers and technology, and aspired to have a career that involved technology. He is currently a Computer Science and Design (CSD) Junior at Singapore University of Technology and Design (SUTD), and a visiting student at UC Berkeley Extension until May 2023.";
const milestoneCircleRadius = 10;
const distanceBetweenMilestoneAndTimeline = 50;
const milestones = [
  {2016: "First venture into the world of coding. Attended a basic Android app development course using storyboards."},
  {2017: "Attended a coding course, where I learnt Ruby, the first programming language I've ever learnt."},
  {2020: "Matriculated at SUTD."},
  {2021: "Completed my first ever internship at DBS Bank as a Business Analyst Intern."},
  {2022: "Completed Mobile application development internship at Housing & Development Board (HDB)."},
  {2023: "Studying at UC Berkeley Extension."}
];
const hobbies = "Road Cycling, Jamming on the Electric Guitar, Watching Anime, Watching Netflix, Building Cool Stuff with Code";

export default function About() {
  useEffect(()=> {
    let width = 700, height = 650, padding = 160;
    let svg = d3.select("#timeline")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("id", "timeline");
    let scale = d3.scaleTime()
                  .domain([new Date(2016, 0, 1, 0), new Date(2023, 0, 1, 0)])
                  .range([0, height - padding]);
    let timeline = d3.axisLeft()
                  .scale(scale)
                  .tickFormat(d3.timeFormat("%Y")) // year-only values for the timeline
                  .tickValues([]); // remove the labels for the timeline
    svg.append("g")
      .attr("transform", `translate(${width/2}, ${padding/4})`)
      .attr("stroke-width", "5")
      .call(timeline); // renders the vertical timeline
    svg.selectAll("circle") // to represent a milestone
        .data(milestones)
        .enter()
        .append("circle")
        .attr("r", milestoneCircleRadius)
        .attr("cx", width/2) // place the circle on the timeline itself
        .attr("cy", (milestone) => {
          return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 - milestoneCircleRadius/2;
        }) // align the circle on the correct position on the timeline
        .attr("fill", "#CCFF00");
    svg.selectAll("line") // renders the lines from the timeline to the year of each milestone
        .data(milestones)
        .enter()
        .append("line")
        .style("stroke", "#CCFF00")
        .style("stroke-width", 3)
        .attr("y1", (milestone) => {
          return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 - milestoneCircleRadius/2;
        })
        .attr("y2", (milestone) => {
          return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 - milestoneCircleRadius/2;
        })
        .attr("x1", (milestone, index) => { // places the line on the left of the timeline if the milestone has an index that is odd, else, the line will be placed on the right
          if (index % 2 === 0){
            return width/2 - distanceBetweenMilestoneAndTimeline - 40;
          }
          else {
            return width/2;
          }
        })
        .attr("x2", (milestone, index) => { // places the line on the left of the timeline if the milestone has an index that is odd, else, the line will be placed on the right
          if (index % 2 === 0){
            return width/2;
          }
          else {
            return width/2 + distanceBetweenMilestoneAndTimeline + 40;
          }
        })
    let texts = svg.selectAll("text")
                    .data(milestones)
                    .enter();
    texts.append("text") // renders the year of each milestone
        .style("fill", "white")
        .style("font-size", "22px")
        .style("text-decoration", "underline")
        .attr("x", (milestone, index) => { // places the text on the left of the timeline if the milestone has an index that is odd, else, the text will be placed on the right
          return index % 2 === 0 ? width/2 - distanceBetweenMilestoneAndTimeline - 40 - (width/5 + distanceBetweenMilestoneAndTimeline)/2 : width/2 + 40 + (width/5 + distanceBetweenMilestoneAndTimeline)/2
        })
        .attr("y", (milestone) => {
          return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 + milestoneCircleRadius/2;
        })
        .text((milestone) => {
          return Object.keys(milestone)[0];
        });
    texts.append("text") // renders the description of each milestone
        .style("fill", "white")
        .attr("x", (milestone, index) => { // places the text on the left of the timeline if the milestone has an index that is odd, else, the text will be placed on the right
          return index % 2 === 0 ? width/2 - distanceBetweenMilestoneAndTimeline - (width/5 + distanceBetweenMilestoneAndTimeline) : width/2 + distanceBetweenMilestoneAndTimeline + 40;
        })
        .attr("y", (milestone) => {
          return scale(new Date(Object.keys(milestone)[0], 0, 1, 0)) + padding/4 + milestoneCircleRadius/2 + 25;
        })
        .text((milestone) => {
          return Object.values(milestone)[0];
        })
        .call(wrap, width/5 + distanceBetweenMilestoneAndTimeline);
  });

  return (
    <div id="about" class="justify-content-center align-items-center container-fluid">
      <div class="spacer"></div>
      <div class="container-fluid">
        <div class="d-flex row align-items-center">
          <div class="col-sm-6 text-end">
            <h1 id="name">{name}</h1>
            <h5 id="title">{title}</h5>
          </div>
          <div class="col-sm-6 text-start">
            <img src={profilePicture} alt="Lim Fuo En profile picture" id="profile_picture"></img>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <blockquote>
        <p id="quote">{quote}</p>
      </blockquote>
      <div class="spacer"></div>
      <div id="about">
        <h3><u>About</u></h3>
        <p class="text-start">{about}</p>
      </div>
      <div class="spacer"></div>
      <div id="timeline">
        <h3><u>(Professional) Timeline</u></h3>
      </div>
      {/* <div class="spacer"></div> */}
      <div id="hobbies">
        <h3><u>Hobbies</u></h3>
        <p id="hobbies_text" class="text-start">{hobbies}</p>
      </div>
      <div class="spacer"></div>
      <div id="find_me">
        <h3><u>Find me on the Web</u></h3>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="find_me_button_container">
                <a href="https://github.com/Fe-56" target="_blank" class="find_me_button">
                  <i class="fa-brands fa-github fa-2xl"></i>
                  <p>Github</p>
                </a>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="find_me_button_container">
                <a href="https://www.linkedin.com/in/limfuoen/" target="_blank" class="find_me_button">
                  <i class="fa-brands fa-linkedin fa-2xl"></i>
                  <p>LinkedIn</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// text-wrapping function from https://stackoverflow.com/questions/24784302/wrapping-text-in-d3
function wrap(text, width) {
  text.each(function () {
    var text = d3.select(this),
    words = text.text().split(/\s+/).reverse(),
    word,
    line = [],
    lineNumber = 0,
    lineHeight = 1.1, // ems
    x = text.attr("x"),
    y = text.attr("y"),
    dy = 0, //parseFloat(text.attr("dy")),
    tspan = text.text(null)
                .append("tspan")
                .attr("x", x)
                .attr("y", y)
                .attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan")
                      .attr("x", x)
                      .attr("y", y)
                      .attr("dy", ++lineNumber * lineHeight + dy + "em")
                      .text(word);
      }
    }
  });
}
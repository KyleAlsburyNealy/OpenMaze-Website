import React, { Component } from "react";
const path = require("path");

// TODO change the members.image fields after `public` works

class Team extends Component {
  state = {
    members: [
      {
        id: 1,
        name: "Katherine Duncan",
        title: "Principle Investigator"
      },
      {
        id: 2,
        name: "Meg Schlichting",
        title: "Principle Investigator",
        image: "/placeholder.png"
      },
      {
        id: 3,
        name: "Kyle Nealy",
        title: "Creator / Project Lead",
        image: "/placeholder.png"
      },
      {
        id: 4,
        name: "Hongyu Wang",
        title: "Lead Programmer",
        image: "/placeholder.png"
      },
      {
        id: 5,
        name: "Darwin Truong",
        title: "Lab Programmer",
        image: "/placeholder.png"
      },
      {
        id: 6,
        name: "Alex Gordienko",
        title: "Lab Programmer / RA",
        image: "/placeholder.png"
      },
      {
        id: 7,
        name: "Cody Howarth",
        title: "Lab Programmer",
        image: "/placeholder.png"
      },
      {
        id: 8,
        name: "Kevin Xu",
        title: "Lab Programmer",
        image: "/placeholder.png"
      }
    ]
  };
  render() {
    return (
      <div className="Team flex flex-wrap mx-10 pt-24 justify-center mx-auto max-w-8xl">
        {this.state.members.map(member => (
          <div
            key={member.id}
            className="bg-white m-6 min-w-xs p-2 shadow-md rounded-sm"
          >
            <h3 className="font-bold text-lg mb-1">{member.name}</h3>
            <h5 className="mb-5 text-gray-700">{member.title}</h5>

            <img
              src={require(`../public/${member.name}.jpg`)}
              alt={member.name}
              className="w-auto rounded-sm"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Team;

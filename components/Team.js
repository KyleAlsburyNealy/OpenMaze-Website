import React, { Component } from "react";

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
      <div className="Team relative flex flex-wrap mx-10  justify-center mx-auto max-w-8xl mb-6 md:-mt-16">
        {this.state.members.map(member => (
          <div
            key={member.id}
            className="bg-dark-light text-white m-6 min-w-xs shadow-md rounded-lg"
          >
            <div className="mx-5 my-4">
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <h5 className="text-gray-500">{member.title}</h5>
            </div>

            <img
              src={require(`../public/${member.name.replace(/\s/g, "")}.jpg`)}
              alt={member.name}
              className="w-auto rounded-b-lg"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Team;

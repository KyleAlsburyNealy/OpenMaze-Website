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
      <div className="Team flex -mx-4 flex-wrap justify-center mx-auto pb-6 md:-mt-16">
        {this.state.members.map(member => (
          <div className="w-full md:w-1/3 lg:w-1/4 sm:w-1/2 p-4">
            <div
              key={member.id}
              className="bg-dark-light text-white min-w-xs shadow-md rounded-lg"
            >
              <div className="mx-5 py-4">
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <h5 className="text-gray-500">{member.title}</h5>
              </div>

              <div className="w-full h-64 rounded-b-lg bg-cover bg-center" style={{backgroundImage: `url(${require(`../public/team/${member.name.replace(
                  /\s/g,
                  ""
                )}.jpg`)})`}}>

              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Team;

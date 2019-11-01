import React, { Component } from 'react'
const path = require('path');

const imagePath = '../public/'

class Team extends Component {
    state = {
        members: [
            {
                key: 1,
                name: 'Katherine Duncan',
                title: 'Principle Investigator',
                image: path.join(imagePath, 'placeholder.jpg')
            }
        ]
    }
    render() {
        return this.state.members.map((member) => (
            <div key={member.key}>
                <h3>{member.name}</h3>
                <h5>{member.title}</h5>
                {/* <img src={member.image} alt={member.name}/> */}
            </div>
        ));
    }
}

export default Team;

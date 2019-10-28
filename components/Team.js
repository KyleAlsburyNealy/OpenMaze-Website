import React, { Component } from 'react'
const path = require('path');

const imagePath = '../assets/images'

class Team extends Component {
    state = {
        members: [
            {
                name: 'Katherine Duncan',
                title: 'Principle Investigator',
                image: path.join(imagePath, 'placeholder.jpg')
            }
        ]
    }
    render() {
        return this.state.members.map((member) => (
            <div>
                <h3>{member.name}</h3>
                <h5>{member.title}</h5>
                <img src={member.image} alt={member.name}/>
            </div>
        ));
    }
}

export default Team;

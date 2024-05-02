import React from 'react';
import Links from './Links';

function About({ bio, github, linkedin }) {
  if (!bio) {
    return null;
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={github} linkedin={linkedin} />
      </div>
    );
  }
}

export default About;
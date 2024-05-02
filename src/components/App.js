import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Home from "./Home";
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home
        name={user.name}
        city={user.city}
        color={user.color}
      />
      <About
        bio={user.bio}
        github={user.github}
        linkedin={user.linkedin}
      />
      
    </div>
  );
}

export default App;
import React from "react";

const Hero = () => {
  const scrollToPricing = () => {
    const section = document.getElementById("pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWorkoutSessions = () => {
    const section = document.getElementById("workouts");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button onClick={scrollToWorkoutSessions}>Start Your Journey</button>
          <button onClick={scrollToPricing}>Discover Your Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

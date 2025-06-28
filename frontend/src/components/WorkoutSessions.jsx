import React from "react";

const WorkoutSessions = () => {
  return (
    <section id="workouts" className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Join our high-intensity programs led by certified trainers to transform your fitness journey.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Explore our expert-led bootcamps designed to boost strength, endurance, and flexibility.
        </p>

        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning Bootcamp</h4>
            <p>
              Build muscle and burn fat with resistance training and dynamic bodyweight exercises.
            </p>
          </div>
          <div>
            <h4>Cardio Burnout Challenge</h4>
            <p>
              Push your endurance limits with high-energy cardio circuits and HIIT.
            </p>
          </div>
          <div>
            <h4>Core & Flexibility Workshop</h4>
            <p>
              Improve posture, reduce injuries, and increase flexibility through focused core training.
            </p>
          </div>
          <div>
            <h4>Weekend Warrior Camp</h4>
            <p>
              Perfect for busy schedules—intense weekend bootcamps to reset and recharge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;

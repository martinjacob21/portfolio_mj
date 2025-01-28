import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white grid-flow-col"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack
          developer with a keen interest in exploring the latest cutting-edge technologies. My journey in the world of
          web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and
          embrace emerging trends in the industry.
        </p>

        <br />

        <p className="text-xl">
          Dynamic and versatile Full Stack Developer with expertise in the
          MERN stack (MongoDB, Express.js, React, and Node.js).
          Specializing in building scalable, user-friendly web applications,
          I blend technical proficiency with creative problem-solving to deliver
          robust solutions. Explore my portfolio to see projects showcasing seamless
          front-end interfaces, efficient back-end systems, and innovative designs
          that bring ideas to life
        </p>
      </div>
    </div>
  );
};

export default About;
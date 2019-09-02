import React from 'react';

const experienceList = require('../resources/experience');

const Experience = () => {

  return (
    <div>
      {experienceList.map((experience) => (
        <div>
          <h3>{experience.JobTitle} | {experience.Company}</h3>
          <p>{experience.Timeline}</p>
          <p>{experience.Description}</p>
          <h5>Skills:</h5>
          <ul className="technologyList">
            {experience.Skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Experience;
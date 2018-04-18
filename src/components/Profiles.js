import React from "react";

import SkillList from "./SkillList";

const Profiles = props => {
  const lists = props.dinos.map(listing => {
    return (
      <SkillList
        key={listing.name}
        name={listing.name}
        image={listing.image}
        skills={listing.skills}
      />
    );
  });

  return <ul id="profiles">{lists}</ul>;
};

export default Profiles;

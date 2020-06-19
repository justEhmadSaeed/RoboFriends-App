import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robo) => (
        <Card id={robo.id} name={robo.name} email={robo.email} />
      ))}
    </div>
  );
};
export default CardList;

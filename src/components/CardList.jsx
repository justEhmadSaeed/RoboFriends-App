import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robo) => (
        <Card key={robo.id} id={robo.id} name={robo.name} email={robo.email} />
      ))}
    </div>
  );
};
export default CardList;

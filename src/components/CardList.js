import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((robo) => (
        <Card key={robo.id} id={robo.id} name={robo.name} email={robo.email} />
      ))}
    </>
  );
};

export default CardList;

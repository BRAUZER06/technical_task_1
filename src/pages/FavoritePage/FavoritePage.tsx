import React from "react";
import "../../App.scss";
import { JokeCart } from "../JokeCart/JokeCart";

export const FavoritePage: React.FC = () => {
  return (
    <div className="favoritePage">
      <JokeCart />
      <JokeCart />
      <JokeCart />
      <JokeCart />
      <JokeCart />
      <JokeCart />
    </div>
  );
};

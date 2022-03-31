import React from "react";
import "../../App.scss";
import { JokeCart } from "../JokeCart/JokeCart";
import { useTypedSelector } from "../../hooks/featchJakeTypeSelector";
import { useDispatch } from "react-redux";
import { fetchJake } from "../../redux/action-creatos/jake";

export const HomePage: React.FC = () => {
  const { jake, error, loading } = useTypedSelector((state) => state.jake);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchJake());
  }, []);

  if (loading) {
    return <h1>Loading </h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="home">
      {jake.map((jake) => (
        <JokeCart key={jake.id} {...jake} />
      ))}
    </div>
  );
};

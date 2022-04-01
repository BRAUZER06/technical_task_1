import React from "react";
import "../../App.scss";
import { ImCross, ImCheckmark } from "react-icons/im";

export const JokeCart = ({ ...props }) => {
  
  const [addRemoveItem, setAddRemoveItem] = React.useState(true);

  const onClickAddRemoveItem: React.MouseEventHandler<HTMLDivElement> = (
    e: any
  ) => {
    setAddRemoveItem(!addRemoveItem);
  };

  return (
    <div className="jokeItem">
      <div className="jokeItem__text">{props.value}</div>
      <div onClick={onClickAddRemoveItem} className="jokeItem__btn">
        {addRemoveItem ? <ImCross /> : <ImCheckmark />}
      </div>
    </div>
  );
};

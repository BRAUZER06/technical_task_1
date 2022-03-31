import React from "react";
import "../../App.scss";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const onClickBtnAddJoke = (e: any): void => {};
  const onClickBtnAutoAddJoke = (e: any): void => {};
  const onClickBtnFavoriteJoke = (e: any): void => {};
  return (
    <div className="header">
      <div className="button">
        <button onClick={onClickBtnAddJoke} className="button__btn">
          Добавить шутку
        </button>
        <button onClick={onClickBtnAutoAddJoke} className="button__btn">
          Авто добавление шуток
        </button>
        <Link to='home' className="button__btn">
        <button onClick={onClickBtnFavoriteJoke} >
          Любимые шутки
        </button>
        </Link>
      </div>
    </div>
  );
};

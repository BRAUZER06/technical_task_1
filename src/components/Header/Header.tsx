import React from "react";
import "../../App.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchJake } from "../../redux/action-creatos/jake";

export const Header: React.FC = () => {
  const [addJackSetTimeOut, setAddJackSetTimeOut] = React.useState(false);
  const timerRef: any = React.useRef();
  const dispatch = useDispatch();

  const addJokeTimer = () => {
    dispatch(fetchJake());
  };

  const onClickAutoAddStartJoke = () => {
    console.log("я в блоке с добавлением шуток");
    timerRef.current = setInterval(addJokeTimer, 1000);
  };

  const onClickAutoAddDeletetJoke = () => {
    clearInterval(timerRef.current);
    console.log("я в блоке с удалением шуток");
  };

  console.log("рендер страницы" + 1121231312313123123);

  const onClickBtnFavoriteJoke = (): void => {};
  return (
    <div className="header">
      <div className="button">
        <button onClick={addJokeTimer} className="button__btn">
          Добавить шутку
        </button>
        {!addJackSetTimeOut ? (
          <button onClick={onClickAutoAddStartJoke} className="button__btn">
            Авто добавление шуток
          </button>
        ) : (
          ""
        )}
        <button onClick={onClickAutoAddDeletetJoke} className="button__btn">
          удаление добавление шуток
        </button>
        <Link to="/FavoritePage" className="button__btn">
          <button onClick={onClickBtnFavoriteJoke}>Любимые шутки</button>
        </Link>
      </div>
    </div>
  );
};

import React from "react";
import "../../App.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchJake } from "../../redux/action-creatos/jake";


export const Header: React.FC = () => {
  const [addJackSetTimeOut, setAddJackSetTimeOut] = React.useState(false);
  const dispatch = useDispatch();
  const onClickBtnAddJoke = (e: any): void => {
    dispatch(fetchJake());
  };

  const onClickBtnAutoAddJoke = (e: any) => {

    
    setAddJackSetTimeOut(!addJackSetTimeOut);
    let timerId = setInterval(() => {
      dispatch(fetchJake());
    }, 1000);
    if(addJackSetTimeOut){
      clearInterval(timerId)
    }
    
   console.log(2);
   
  };

  const onClickBtnFavoriteJoke = (e: any): void => {};
  return (
    <div className="header">
      <div className="button">
        <button  onClick={onClickBtnAddJoke} className="button__btn">
          Добавить шутку
        </button>
        <button onClick={onClickBtnAutoAddJoke} className="button__btn">
          Авто добавление шуток
        </button>
        <Link to="/FavoritePage" className="button__btn">
          <button onClick={onClickBtnFavoriteJoke}>Любимые шутки</button>
        </Link>
      </div>
    </div>
  );
};

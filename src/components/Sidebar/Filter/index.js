import React from "react";
import "./styles.css";

const Filter = props => {
  return (
    <ul className="filter__list">
      <li className="filter__item custom-control">
        <label className="custom-control__label">
          <span className="custom-checkbox">
            <input
              type="checkbox"
              className="custom-control__input"
              id="stops_all"
            />
            <span className="custom-control__indicator"></span>
          </span>
          <span className="custom-control__text">Все</span>
        </label>
      </li>
      <li className="filter__item custom-control">
        <label className="custom-control__label">
          <span className="custom-checkbox">
            <input
              type="checkbox"
              className="custom-control__input"
              id="stops_0"
            />
            <span className="custom-control__indicator"></span>
          </span>
          <span className="custom-control__text">Без пересадок</span>
        </label>
      </li>
      <li className="filter__item custom-control">
        <label className="custom-control__label">
          <span className="custom-checkbox">
            <input
              type="checkbox"
              className="custom-control__input"
              id="stops_1"
            />
            <span className="custom-control__indicator"></span>
          </span>
          <span className="custom-control__text">1 пересадки</span>
        </label>
      </li>
      <li className="filter__item custom-control">
        <label className="custom-control__label">
          <span className="custom-checkbox">
            <input
              type="checkbox"
              className="custom-control__input"
              id="stops_2"
            />
            <span className="custom-control__indicator"></span>
          </span>
          <span className="custom-control__text">2 пересадки</span>
        </label>
      </li>
      <li className="filter__item custom-control">
        <label className="custom-control__label">
          <span className="custom-checkbox">
            <input
              type="checkbox"
              className="custom-control__input"
              id="stops_3"
            />
            <span className="custom-control__indicator"></span>
          </span>
          <span className="custom-control__text">3 пересадки</span>
        </label>
      </li>
    </ul>
  );
};

export default Filter;

import React from "react";
import "./styles.css";
import { sortActions } from "../../_actions/";
import { connect } from "react-redux";
import cn from "classnames";

const Tabs = ({ sort, sortByPrice, sortBySpeed }) => {
  const eventHandler = e => {
    e.preventDefault();
    e.target.id === "price" ? sortByPrice("price") : sortBySpeed("speed");
  };
  return (
    <div className={"sorting-tabs"}>
      <ul className="sorting-tabs__list">
        <li
          className={cn("sorting-tabs__item", {
            "is-active": sort === "price"
          })}
        >
          <a
            href="/"
            id={"price"}
            className={"sorting-tabs__btn"}
            onClick={e => eventHandler(e)}
          >
            Самый дешевый
          </a>
        </li>
        <li
          className={cn("sorting-tabs__item", {
            "is-active": sort === "speed"
          })}
        >
          <a
            href="/"
            id={"speed"}
            className={"sorting-tabs__btn"}
            onClick={e => eventHandler(e)}
          >
            Самый быстрый
          </a>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state, ownState) => {
  return {
    sort: state.sorting.sort
  };
};
const mapDispatchToProps = {
  sortByPrice: sortActions.sortByPrice,
  sortBySpeed: sortActions.sortBySpeed
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);

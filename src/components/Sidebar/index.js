import React from "react";
import ContentHolder from "../_common/ContentHolder";
import Filter from "./Filter";

function Sidebar() {
  return (
    <div className="sidebar">
      <ContentHolder>
        <div className="filter__wrapper">
          <h4 className={"filter__title"}>Количество пересадок</h4>
          <Filter />
        </div>
      </ContentHolder>
    </div>
  );
}

export default Sidebar;

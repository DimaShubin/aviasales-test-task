import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import MainContent from "../../components/MainContent";
import "./styles.css";

const Search = () => (
  <>
    <Header />
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <MainContent />
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Search;

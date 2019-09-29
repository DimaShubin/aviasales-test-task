import React, { useEffect, useState } from "react";
import SortingTabs from "../SortingTabs";
import Preloader from "../../assets/images/preloader.gif";
import Ticket from "../_common/Card";
import { ticketsActions } from "../../_actions";
import { connect } from "react-redux";

function MainContent({
  tickets,
  loading,
  loadTickets,
  search_id,
  getSearchId
}) {
  useEffect(() => {
    getSearchId();
  }, []);

  return (
    <div className="search-result__wrapper">
      <SortingTabs></SortingTabs>
      {loading ? (
        <div className={"preloader-holder"}>
          <img src={Preloader} alt={"Loading..."} />
        </div>
      ) : (
        tickets.map(ticket => <Ticket ticket={ticket} />)
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.tickets.loading,
  tickets: state.tickets.tickets,
  search_id: state.tickets.search_id
});
const mapDispatchToProps = {
  loadTickets: ticketsActions.loadTickets,
  getSearchId: ticketsActions.getSearchId
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent);

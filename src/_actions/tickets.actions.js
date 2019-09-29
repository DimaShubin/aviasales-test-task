import { ticketConstants } from "../_constants";
import { ticketsService } from "../_services/tickets.service.js";
// import { delay } from "../_constants";

export const ticketsActions = {
  //   filter
  loadTickets,
  getSearchId
};

function getSearchId() {
  return dispatch => {
    dispatch(requestSearchId());
    ticketsService
      .getSearchId()
      .then(
        id => {
          dispatch(succesSearchId(id.searchId));
          return id.searchId;
        },
        error => {
          dispatch(failureSearchId(error));
        }
      )
      .then(id => ticketsService.getTickets(id))
      .then(
        tickets => {
          dispatch(successTickets(tickets));
        },
        error => dispatch(failureTickets(error))
      );
  };

  function requestSearchId() {
    return { type: ticketConstants.GET_ID_REQUEST, loading: true };
  }
  function succesSearchId(id) {
    return { type: ticketConstants.GET_ID_SUCCESS, id };
  }
  function failureSearchId(error) {
    return { type: ticketConstants.GET_ID_FAILURE, error };
  }

  function request() {
    return { type: ticketConstants.GET_TICKETS_REQUEST, loading: true };
  }
  function successTickets(tickets) {
    return { type: ticketConstants.GET_TICKETS_SUCCESS, tickets };
  }
  function failureTickets(error) {
    return { type: ticketConstants.GET_TICKETS_FAILURE, error };
  }
}

function loadTickets() {
  return dispatch => {
    dispatch(request());
  };
  function request() {
    return { type: ticketConstants.GET_TICKETS_REQUEST, loading: true };
  }
  function successTickets(tickets) {
    return { type: ticketConstants.GET_TICKETS_SUCCESS, tickets };
  }
  function failureTickets(error) {
    return { type: ticketConstants.GET_TICKETS_FAILURE, error };
  }
}

// function filter(sort) {
//   //   return { type: sortConstants.PRICE, sort };
// }

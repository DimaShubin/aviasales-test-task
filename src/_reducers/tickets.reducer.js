import { ticketConstants } from "../_constants";

const initialState = {
  loading: false,
  tickets: []
};

export function tickets(state = initialState, action) {
  switch (action.type) {
    case ticketConstants.GET_ID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ticketConstants.GET_ID_SUCCESS:
      return {
        ...state,
        search_id: action.id
      };
    case ticketConstants.GET_ID_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case ticketConstants.GET_TICKETS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ticketConstants.GET_TICKETS_SUCCESS:
      return {
        tickets: action.tickets
      };
    case ticketConstants.GET_TICKETS_FAILURE:
      return {
        error: action.error
      };

    default:
      return state;
  }
}

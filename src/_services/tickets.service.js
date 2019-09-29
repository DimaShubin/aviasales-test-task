import { tickets } from "../_reducers/tickets.reducer";

export const ticketsService = {
  getTickets,
  getSearchId
};

const searchId = JSON.parse(localStorage.getItem("searchId"));

function getTickets(id) {
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" }
  };

  return fetch(`tickets?searchId=${id}`, requestOptions).then(handleResponse);
}
function getSearchId() {
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" }
  };

  return fetch(`search`, requestOptions).then(handleResponse);
}

function handleResponse(res) {
  // debugger;
  return res.text().then(text => {
    const data = text && JSON.parse(text);
    if (!res.ok) {
      if (res.status === 401) {
        window.location.reload();
      }

      const error = (data && data.message) || res.statusText;
      return Promise.reject(error);
    }
    if (data.tickets) {
      return data.tickets.slice(0, 5);
    }
    return data;
  });
}

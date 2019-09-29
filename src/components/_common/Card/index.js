import React from "react";
import { parseTime, timeConverter } from "../../../_helpers";
import ContentHolder from "../ContentHolder";
import Preloader from "../../../assets/images/preloader.gif";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./styles.css";

const propTypes = {};

TicketCard.defaultProps = {
  carrier: "MH",
  price: 88441,
  segments: [
    {
      date: "2019-10-07T14:33:00.000Z",
      destination: "HKT",
      duration: 735,
      origin: "MOW",
      stops: ["SIN", "HKG", "DXB"]
    },
    {
      date: "2019-10-26T21:08:00.000Z",
      destination: "HKT",
      duration: 716,
      origin: "MOW",
      stops: ["HKG"]
    }
  ]
};

function TicketCard({ ticket: { carrier, price, segments } }) {
  const finishTime = (startH, startMin, duration) => {
    const finishTimeInMin =
      timeConverter(startH).hToMin() + Number(startMin) + duration;
    return timeConverter(((finishTimeInMin / 60) % 24) * 60).minToH();
  };
  return (
    <ContentHolder>
      <div className={"ticket-card"}>
        <div className="container">
          <div className="row ticket-card__header">
            <div className="col-8">
              <div className="ticket-card__price">
                {`${price.toLocaleString("en-US").replace(",", " ")} P`}
              </div>
            </div>
            <div className="col-4">
              <div className="ticket-card__carrier">
                <img
                  src={`https://pics.avs.io/99/36/${carrier}.png`}
                  srcSet={`https://pics.avs.io/99/36/${carrier}@2x.png`}
                  alt={`${carrier} airlines`}
                  width={110}
                  height={36}
                />
              </div>
            </div>
          </div>

          <div className="ticket-card__body">
            {segments.map((segment, index) => (
              <div className="row segment-route" key={index}>
                <div className="col-4">
                  <div className="segment-route__item-title">
                    <span className="segment-route__destination">
                      {segment.destination}
                    </span>
                    -{" "}
                    <span className="segment-route__origin">
                      {segment.origin}
                    </span>
                  </div>
                  <div className="segment-route__time">
                    <span className="segment-route__time-start">
                      {`${parseTime(segment.date).hours()}: ${parseTime(
                        segment.date
                      ).minuts()}`}
                    </span>
                    -{" "}
                    <span className="segment-route__time-finish">
                      {finishTime(
                        parseTime(segment.date).hours(),
                        parseTime(segment.date).minuts(),
                        segment.duration
                      )}
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="segment-route__full-time">
                    <span className={"segment-route__item-title"}>В пути</span>
                    <br />
                    <span>
                      {timeConverter(segment.duration, true).minToH()}
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="segment-route__stops-count">
                    <span
                      className={"segment-route__item-title"}
                    >{`${segment.stops.length} пересадки`}</span>

                    <span>{segment.stops.join(", ")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentHolder>
  );
}

TicketCard.propTypes = propTypes;

export default connect()(TicketCard);
//   mapStateToProps,
//   mapDispatchToProps

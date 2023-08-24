import React from "react";
import classNames from "classnames";

import "./ProposalRow.css";

const withoutEventDefault = (callback) => (event) => {
  event.preventDefault();
  callback();
};

const ProposalRow = ({ proposal, onStatusUpdate }) => {
  const { id, title, status, speaker, category } = proposal;

  const handleAccept = () => {
    onStatusUpdate(id, "accepted");
  };

  const handleReject = () => {
    onStatusUpdate(id, "rejected");
  };

  console.log("proposalRow: ", proposal);
  return (
    <div
      data-testid={`proposal-id-${id}`}
      className={classNames("ProposalRow", "ProposalRow--accepted")}
    >
      <div className="ProposalsRow__status_indicator" />
      <div className="ProposalsRow__title">{title}</div>
      <div className="ProposalsRow__speaker"> speaker: {speaker}</div>
      <div className="ProposalsRow__category">category: {category}</div>
      <div className="ProposalsRow__status">status: {status}</div>
      {status !== "accepted" && (
        <button
          className="ProposalsRow__accept_button"
          onClick={withoutEventDefault(handleAccept)}
        >
          Accept
        </button>
      )}
      {status !== "rejected" && (
        <button
          className="ProposalsRow__reject_button"
          onClick={withoutEventDefault(handleReject)}
        >
          Reject
        </button>
      )}
    </div>
  );
};

export default ProposalRow;

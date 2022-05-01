import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notification = () => {
  const { call, callAccepted, answerCall } = useContext(SocketContext);
  return (
    <div className="mb-1 mt-4">
      {call.isReceivingCall && !callAccepted && (
        <div>
          <h6 className="text-light">{call.name} is calling you</h6>
          <button className="btn btn-success" onClick={answerCall}>
            Answer
          </button>
          <hr className="text-primary mt-5"></hr>
        </div>
      )}
    </div>
  );
};

export default Notification;

import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Player = () => {
  const { callAccepted, myVideo, userVideo, stream, name, callEnded } =
    useContext(SocketContext);

  return (
    <div className="mt-3">
      {/* your video */}
      <div className="card-group">
        {stream && (
          <div className="card bg-dark">
            <h6 className="fs-5 p-1 text-primary card-title">
              your name : <span className="text-light">{name}</span>
            </h6>
            <video
              playsInline
              muted
              ref={myVideo}
              id="my-video"
              autoPlay
              className="rounded card-img-top"
            />
          </div>
        )}

        {/* caller's video */}
        {callAccepted && !callEnded && (
          <div className="card bg-dark">
            <h6 className="text-primary fs-5 card-title p-1">
              caller name : <span className="text-light">{name}</span>
            </h6>
            <video
              playsInline
              muted
              ref={userVideo}
              autoPlay
              className="rounded card-img-top"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Player;

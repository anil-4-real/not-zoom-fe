import React, { useContext, useState } from "react";
import { SocketContext } from "../SocketContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Settings = (props) => {
  const { callAccepted, name, setName, callEnded, me, callUser, leaveCall } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");
  return (
    <div>
      <div>
        <form
          className="form"
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h6 className="text-light text-muted">Account info</h6>
          <label className="form-label text-light" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form-control w-25"
            placeholder="Enter your name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <CopyToClipboard text={me} className="btn btn-primary mt-2 p-1">
            <button>Copy Room Id</button>
          </CopyToClipboard>
          <hr className="text-primary mt-5"></hr>
          {props.children}

          <h6 className="text-light text-muted mt-5">Place a call</h6>
          <label className="form-label text-light" htmlFor="id">
            Room Id
          </label>
          <input
            type="text"
            placeholder="Enter room id to call"
            className="form-control w-25"
            id="id"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          ></input>
          {callAccepted && !callEnded ? (
            <button className="btn btn-danger p-1 mt-2" onClick={leaveCall}>
              End call
            </button>
          ) : (
            <button
              className="btn btn-primary p-1 mt-2"
              onClick={() => {
                callUser(idToCall);
              }}
            >
              Place Call
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Settings;

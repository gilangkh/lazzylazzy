/** @format */

import React from "react";
import Icon from "./Icons";

function Note(props) {
  return (
    <div className="note">
      <div className="note-items ">
        <Icon img_url={props.icon} />
        <h2>{props.sosmed_name}</h2>
        <p>{props.sosmed_tag}</p>
        <div className="link">
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.linkName}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Note;

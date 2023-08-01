/** @format */

import React from "react";
import Icon from "./Icons";

function Note(props) {
  return (
    <div className="note">
      <div className="icon-note">
        <Icon img_url={props.icon} />
      </div>

      <h2>{props.sosmed_name}</h2>
      <p> {props.sosmed_tag}</p>
      <div className="link">
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.linkName}
        </a>
      </div>
    </div>
  );
}

export default Note;

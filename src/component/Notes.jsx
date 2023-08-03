/** @format */

import React, { useState } from "react";
import Icon from "./Icons";

function Note(props) {
  const [isMouseOver, setMouseOver] = useState(false);

  function hadleMouseOver() {
    setMouseOver(true);
  }
  function hadleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="note" onMouseOver={hadleMouseOver} onMouseOut={hadleMouseOut} >
      <div className="note-items">
        {isMouseOver ? (
          <>
            <Icon img_url={props.icon} />
            <h2>{props.sosmed_name}</h2>
            <p> {props.sosmed_tag}</p>
            <div className="link">
              <a href={props.link} target="_blank" rel="noreferrer">
                {props.linkName}
              </a>
            </div>
          </>
        ):  <Icon img_url={props.icon} />}
      </div>
    </div>
  );
}

export default Note;

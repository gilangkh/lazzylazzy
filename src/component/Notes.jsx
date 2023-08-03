/** @format */

import React, { useState } from "react";
import Icon from "./Icons";

function Note(props) {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }
  
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div
      className="note"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={`note-items ${isMouseOver ? "note-items-hover" : ""}`}>
        <Icon img_url={props.icon} />
        {isMouseOver ? (
          <>
            <h2>{props.sosmed_name}</h2>
            <p>{props.sosmed_tag}</p>
            <div className="link">
              <a href={props.link} target="_blank" rel="noreferrer">
                {props.linkName}
              </a>
            </div>
          </>
        ) : (
          <p>{props.sosmed_tag}</p>
        )}
      </div>
    </div>
  );
}

export default Note;

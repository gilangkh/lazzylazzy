/** @format */

import React from "react";
import Icon from "../component/Icons";
import Headers from "../component/Headers";
import Note from "../component/Notes";
import mySosmed from "../mySosmed";

function Home() {
  return (
    <div>
      <div className="heading-tag">
        <Icon img_url="./lazzy.png" />
        <h2>Lazzy Lazzy </h2>
      </div>
      <Headers />
      <div  className="content">
        {mySosmed.map((props)=>(
          <Note
          key={props.id}
          sosmed_name={props.name}
          sosmed_tag={props.tag}
          icon={props.icon}
          link={props.link} 
          linkName={props.linkName}/>
        ))}
      </div>
    </div>
  );
}

export default Home;

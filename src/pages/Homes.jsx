/** @format */

import React from "react";
import Headers from "../component/Headers";
import Note from "../component/Notes";
import mySosmed from "../mySosmed";
import Footer from "../component/Footer";

function Home() {
  return (
    <div>
      <div className="container">
        <Headers />
        <div className="content">
          {mySosmed.map((props) => (
            <Note
              key={props.id}
              sosmed_name={props.name}
              sosmed_tag={props.tag}
              icon={props.icon}
              link={props.link}
              linkName={props.linkName}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

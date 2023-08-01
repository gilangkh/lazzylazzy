import React from 'react';
import Icon from './Icons';

function Note(props){

 return <div className='note'>
    <Icon img_url={props.icon} />
    <h2>{props.sosmed_name}</h2>
    <p> {props.sosmed_tag}</p>
    <a href={props.link} target='_blank' rel="noreferrer"> {props.linkName} </a>
 </div>

}

export default Note
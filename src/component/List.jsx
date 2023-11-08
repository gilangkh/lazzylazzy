import React from 'react';

function ListUser(props){

 return <div>
    <h1>{props.nama}</h1>
    <p>{props.email}</p>
    <p>{props.alamat}</p>
 </div> 

}

export default ListUser
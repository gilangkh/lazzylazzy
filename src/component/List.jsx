import React from 'react';

function ListUser(props){
let no = 0
 return <div className='list-user'>

    <p>{props.no}</p>
    <p>{props.nama}</p>
    <p>{props.email}</p>
    <p>{props.alamat}</p>
 </div> 

}

export default ListUser
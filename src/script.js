function getData(){
 
    var requestOptions ={
        method:'GET',
        redirect :'follow'
    }
    fetch('http://localhost:5000/users',requestOptions)
    .then(response =>response.json())
    .then(data => console.log(data))
    .catch(error=>console.error(error))
}

export {getData}
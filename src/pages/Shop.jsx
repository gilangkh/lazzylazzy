import { useEffect, useState } from 'react';
import ListUser from '../component/List';
function YourComponent() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('http://localhost:5000/users', requestOptions)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error(error));
  }

  return (
    <div>
      <h1>Get Data Testing</h1>
      {userData.map(user => (
        <ListUser
          key={user.id}
          nama={user.name}
          email={user.email}
          alamat={user.alamat}
        />
      ))}
    </div>
  );
}

export default YourComponent;

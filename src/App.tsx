import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Home from './components/Home';
function App() {
  const [users, setUser] = useState([]);

  useEffect(()=>{
    const fetch = async () =>{
      const res = await axios('https://dummyjson.com/users');
      const data = res.data.users;
      setUser(data);
    }
    fetch();
    
  },[])

  const CreateUser = () =>{

  }
  return (
    <div>
      <Home users={users} setUser = {setUser}/>
    </div>
  );
}

export default App;
import React, {useState, useEffect} from 'react'
import NavigationBar from './components/NavigationBar';

function App() {
  const [allUsers, setAllUsers] = useState([{}]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const users = await response.json();
        setAllUsers(users);
      } catch(err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>  
      <NavigationBar />
      <div className="flex items-center justify-center h-screen">
        {allUsers.users?.map((user, i) => (
          <p key={i}>{user}</p>
        ))}
      </div>
    </div>
  )
}

export default App
import './assets/scss/main.scss'
import { useEffect, useState} from "react";


function App() {

const [usersFromApi, setUsersFromApi] = useState([])
const [usersFiltered, setUsersFiltered] = useState([])

useEffect(()=>{
fetch('https://dummyjson.com/users').then(response => response.json()).then(data => setUsersFromApi(data.users)).catch(error => console.error()).finally(() => console.log('Terminé !'))
}, [])

  return (
    <div className="App">
     
   
    </div>
  );
}

export default App;

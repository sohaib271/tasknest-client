import { Outlet, useNavigate } from 'react-router-dom';
import './App.css'
import useUser from './components/auth/userHook';


function App() {

  const token=localStorage.getItem("token");
  const {data:user}=useUser();
  const navi=useNavigate();
  
  function checkPath(){
    if(token && user.id){
      navi("/mydashboard")
    }
    if(!token || !user.id){
      navi("/login");
    }
  }
  return <>
 <button onClick={checkPath}>Click to proceed</button>
  <Outlet/>
  </>
}

export default App;

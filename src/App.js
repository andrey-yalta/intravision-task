import {Header} from "./components/Header/Header";
import './css/style.scss';
import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {Users} from "./components/otherComponents/Users";
import {Actives} from "./components/otherComponents/Actives";
import {InformationBase} from "./components/otherComponents/InformationBase";
import {Settings} from "./components/otherComponents/Settings";
import {TasksContainer} from "./components/Tasks/TasksContainer";
import {ChangerContainer} from "./components/Changer/ChangerContainer";
import {useDispatch} from "react-redux";
import {Clients} from "./components/otherComponents/Clients";
import {getInicialize} from "./redux/tasks-actions";
import {Home} from "./components/otherComponents/Home";



function App() {
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getInicialize())
    },[dispatch])
  return (
    <div >
      <Header/>
      <Navbar/>
      <Route path={"/"} render={ ()=><Home/> } exact/>
      <Route path={"/tasks"} render={ ()=><TasksContainer/> } exact/>
      <Route path={"/settings"} render={ ()=><Settings/> } exact/>
      <Route path={"/users"} render={ ()=><Users/> } exact/>
      <Route path={"/actives"} render={ ()=><Actives/> } exact/>
      <Route path={"/clients"} render={ ()=><Clients/> } exact/>
      <Route path={"/information"} render={ ()=><InformationBase/> } exact/>
      <Route path={"/changer"}  render={ ()=><ChangerContainer/> }/>
    </div>
  );
}

export default App;

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
import {getInicialize} from "./redux/tasks-reducer";
import {useDispatch} from "react-redux";



function App() {
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getInicialize())
    },[dispatch])
  return (
    <div >
      <Header/>
      <Navbar/>
      <Route path={"/"} render={ ()=><TasksContainer/> } exact/>
      <Route path={"/settings"} render={ ()=><Settings/> } exact/>
      <Route path={"/users"} render={ ()=><Users/> } exact/>
      <Route path={"/actives"} render={ ()=><Actives/> } exact/>
      <Route path={"/information"} render={ ()=><InformationBase/> } exact/>
      <Route path={"/changer"}  render={ ()=><ChangerContainer/> }/>
    </div>
  );
}

export default App;

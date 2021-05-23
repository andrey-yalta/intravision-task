import React from 'react'
import {Task} from "./Task/Task";
import {ChangerContainer} from "../Changer/ChangerContainer";
import {CreatorContainer} from "../Creator/CreatorContainer";


export const Tasks = ({setIsCreatorOpen,isCreatorOpen,setIsChangerOpen,users,statuses,isChangerOpen,tasks,priority})=>{
    const onCreatorOpenClick =()=>{
        setIsCreatorOpen(!isCreatorOpen)
    }
    const onChangerOpenClick =(value)=>{
        setIsChangerOpen(value)
    }
    console.log('render tasks')
    return(
        <div className="content">
            <CreatorContainer isCreatorOpen={isCreatorOpen} onChangerOpenHandler={onChangerOpenClick} creatorOpenHandler={onCreatorOpenClick}/>
            <ChangerContainer users={users}   statuses={statuses} isChangerOpen={isChangerOpen} changerOpenHandler={onChangerOpenClick}/>
            <div className="tasks">
                <div className="tasks__navigation">
                    <button onClick={onCreatorOpenClick}>
                        Создать заявку
                    </button>

                </div>
                <div className="tasks__table">
                    <div className="tasks__table-head">
                        <li className="tasks__table-head-item">
                            <div className="table-item__id"><span>ID</span></div>
                            <div className="table-item__name"><span>Название</span></div>
                            <div className="table-item__status"><span>Статус</span></div>
                            <div className="table-item__creator"><span>Исполнитель</span></div>
                        </li>
                    </div>
                    <div className="tasks__table-items">
                        <ul>
                            {tasks && tasks.map(u=> <Task onChangerOpenHandler={onChangerOpenClick} key={`${u.id}_${u.name}`} {...u } priority ={priority} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
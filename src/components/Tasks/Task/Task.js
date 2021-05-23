import React from "react";
import {useDispatch} from "react-redux";
import {getTaskById, setSelectedTaskId} from "../../../redux/tasks-reducer";
export const Task = ({id,name,executorName,statusName,statusRgb,priorityId,priority,onChangerOpenHandler})=>{
    const dispatch = useDispatch()
    const OnTaskClick =()=>{
        dispatch(setSelectedTaskId(id))
        dispatch(getTaskById(id))
        onChangerOpenHandler(true)
    }
    const priorityRgb = priority.find(u=>u.id === priorityId).rgb
    return(
        <li onClick={OnTaskClick} className="tasks__table-item">
            <div className="table-item__label"  style={{"backgroundColor":priorityRgb}}/>
            <div className="table-item__id"><span>{id.toString().slice(0,3) +' ' + id.toString().slice(3)}</span></div>
            <div className="table-item__name"><span>{name.length > 90? name.slice(0,90)+'...' : name}</span></div>
            <div className="table-item__status status-open"><span style={{"backgroundColor":statusRgb}}>{statusName}</span></div>
            <div className="table-item__creator">
                <span>{executorName}</span></div>
        </li>
    )
}
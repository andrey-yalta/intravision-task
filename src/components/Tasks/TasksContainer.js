import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getTasks} from "../../redux/tasks-reducer";
import {Tasks} from "./Tasks";


export const TasksContainer = ()=>{
    const dispatch = useDispatch()
    const [isChangerOpen, setIsChangerOpen] = React.useState(false)
    const [isCreatorOpen, setIsCreatorOpen] = React.useState(false)

    React.useEffect(()=>{
        dispatch(getTasks())
    },[dispatch])

    const priority= useSelector(state => state.tasksPage.priority)
    const users= useSelector(state => state.tasksPage.users)
    const statuses= useSelector(state => state.tasksPage.statuses)
    const tasks= useSelector(state => state.tasksPage.tasks)

    return(
        <Tasks tasks={tasks} isChangerOpen={isChangerOpen} setIsChangerOpen={setIsChangerOpen} priority={priority}
               users={users} statuses={statuses} isCreatorOpen={isCreatorOpen} setIsCreatorOpen={setIsCreatorOpen}/>
    )
}
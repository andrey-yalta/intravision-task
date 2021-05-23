import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {editTask} from "../../redux/tasks-reducer";
import {Changer} from "./Changer";


export const ChangerContainer =({isChangerOpen,changerOpenHandler,users,statuses})=>{

    const selectedTask= useSelector(state => state.tasksPage.selectedTask)
    const createdAt =  new Date(Date.parse(selectedTask && selectedTask.createdAt))
    const dispatch = useDispatch()
    const [isStatusesListOpen, setIsStatusesListOpen] = React.useState(false)
    const [isExecutorsListOpen, setIsExecutorsListOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState("" )
    const [selectedExecutor, setSelectedExecutor] = React.useState( "")
    React.useEffect(()=>{
        if(selectedTask){
            setSelectedStatus(selectedTask.statusName)
            setSelectedExecutor(selectedTask.executorName)
        }
    },[selectedTask])
    React.useEffect(()=>{

    },[selectedTask])
    const [taskComment, setTaskComment] = React.useState("")
    const onTaskCHanged = (e)=>{
        e.preventDefault()
        const changedStatusId = statuses.find(u=> u.name === selectedStatus).id
        const changedExecutorId = users.find(u=> u.name === selectedExecutor).id
        dispatch(editTask(selectedTask.id,taskComment,changedStatusId,changedExecutorId))
        setTaskComment("")
        e.target.reset()
    }

    return(
       <Changer isChangerOpen={isChangerOpen} changerOpenHandler={changerOpenHandler} users={users} statuses={statuses}
                 setSelectedStatus={setSelectedStatus} setIsStatusesListOpen={setIsStatusesListOpen}
                isStatusesListOpen={isStatusesListOpen} setSelectedExecutor={setSelectedExecutor}
                setIsExecutorsListOpen={setIsExecutorsListOpen} isExecutorsListOpen={isExecutorsListOpen}
                setTaskComment={setTaskComment} selectedTask={selectedTask} onTaskCHanged={onTaskCHanged}
                selectedStatus={selectedStatus} selectedExecutor={selectedExecutor} createdAt={createdAt}/>
    )
}
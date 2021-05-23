import React from "react";
import {useDispatch} from "react-redux";
import {Creator} from "./Creator";
import {addTask} from "../../redux/tasks-actions";



export const CreatorContainer = ({isCreatorOpen,creatorOpenHandler,onChangerOpenHandler})=>{
    const dispatch = useDispatch()

    const onSubmitForm = (e)=>{
        e.preventDefault()
        dispatch(addTask(taskName,description))
        setDescription("")
        setTaskName("")
        alert('отправлено')
        creatorOpenHandler()
        onChangerOpenHandler(true)

    }
    const [taskName, setTaskName] = React.useState("");
    const [description, setDescription] = React.useState("");
    return(
        <Creator onSubmitForm={onSubmitForm} taskName={taskName} setTaskName={setTaskName} description={description}
                 setDescription={setDescription} isCreatorOpen={isCreatorOpen} creatorOpenHandler={creatorOpenHandler}/>
    )
}
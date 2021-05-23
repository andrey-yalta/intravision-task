import {tasksApi} from "../api/tasksApi";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const SET_TASKS = "SET_TASKS";
export const SET_PRIORITY = "SET_PRIORITY";
export const SET_STATUSES = "SET_STATUSES";
export const SET_SELECTED_TASK = "SET_SELECTED_TASK";
export const SET_SELECTED_TASK_ID = "SET_SELECTED_TASK_ID";
export const SET_USERS = "SET_USERS";

export const toggleIsFetching = (isFetching) =>{
    return{type:TOGGLE_IS_FETCHING, isFetching}
}
export const setTasks = (tasks) =>{
    return {type:SET_TASKS,tasks}
};
export const setSelectedTask = (selectedTask) =>{
    return {type:SET_SELECTED_TASK,selectedTask}
};
export const setPriority = (priority) =>{
    return {type:SET_PRIORITY,priority}
};
export const setUsers = (users) =>{
    return {type:SET_USERS,users}
};
export const setStatuses = (statuses) =>{
    return {type:SET_STATUSES,statuses}
};
export const setSelectedTaskId = (selectedTaskId) =>{
    return {type:SET_SELECTED_TASK_ID,selectedTaskId}
};

export const getTasks = () => {
    return async (dispatch) => {
        let data = await tasksApi.getTasks();
        dispatch(setTasks(data.data.value));
    }
}
export const getTaskById = (id) => {
    return async (dispatch) => {
        let data = await tasksApi.getTaskById(id);
        dispatch(setSelectedTask(data.data));
    }
}
export const getInicialize =()=>{
    return async (dispatch)=>{
        dispatch(getPriority())
        dispatch(getStatuses())
        dispatch(getUsers())
        dispatch(getTasks())
    }
}

export const getPriority = () => {
    return async (dispatch) => {
        let data = await tasksApi.getPriority();
        dispatch(setPriority(data.data));
    }
}
export const getStatuses = () => {
    return async (dispatch) => {
        let data = await tasksApi.getStatuses();
        dispatch(setStatuses(data.data));

    }
}
export const getUsers = () => {
    return async (dispatch) => {
        let data = await tasksApi.getUsers();
        dispatch(setUsers(data.data));
    }
}

export const addTask=(name,description)=>{
    const task ={
        "name": name,
        "description": description,
        "price": 100,
        "taskTypeId": 37361,
        "statusId": 74722,
        "priorityId": 62268,
        "serviceId": 37360,
        "resolutionDatePlan": "2021-05-21T10:37:06.026Z",
        "tags": [
        ],
        "initiatorId": 37362,
        "executorId": 37361,
        "executorGroupId": 37360
    }

    return async (dispatch)=>{
        const addTaskresult = await tasksApi.addTask(task)
        if(addTaskresult ===200){
            let data = await tasksApi.getTasks();
            dispatch(setTasks(data.data.value));
            const selectedId = data.data.value[data.data.value.length-1].id
            dispatch(setSelectedTaskId(selectedId))
            dispatch(getTaskById(selectedId))
        }

    }
}

export const editTask=(id,comment,statusId,executorId)=>{
    let task =
        {
            "id": id,
            "statusId": statusId,
            "executorId": executorId
        };
    if(comment.length>0){
        task.comment =comment
    }
    return async (dispatch)=>{
        await tasksApi.editTask(task)
        dispatch(getTaskById(id))
        dispatch(getTasks())
    }
}

import {tasksApi} from "../api/tasksApi";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_TASKS = "SET_TASKS";
const SET_PRIORITY = "SET_PRIORITY";
const SET_STATUSES = "SET_STATUSES";
const SET_SELECTED_TASK = "SET_SELECTED_TASK";
const SET_SELECTED_TASK_ID = "SET_SELECTED_TASK_ID";
const SET_USERS = "SET_USERS";

let initialState = {
    tasks:[],
    priority:[],
    statuses:[],
    selectedTaskId:null,
    selectedTask:null,
    users:[]

};
const shoesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_TASKS:
            return {
                ...state,tasks: action.tasks,
            }
        case SET_SELECTED_TASK:
            debugger
            return {
                ...state,selectedTask: action.selectedTask,
            }
        case SET_PRIORITY:
            return {
                ...state,priority: action.priority,
            }
        case SET_USERS:
            return {
                ...state,users: action.users,
            }
        case SET_SELECTED_TASK_ID:
            return {
                ...state,selectedTaskId: action.selectedTaskId,
            }
        case SET_STATUSES:
            return {
                ...state,statuses: action.statuses,
            }

        default:
            return state;
    }
}
export default shoesReducer;

export const toggleIsFetching = (isFetching) =>{
    return{type:TOGGLE_IS_FETCHING, isFetching}
}
export const setTasks = (tasks) =>{
    return {type:SET_TASKS,tasks}
};
export const setSelectedTask = (selectedTask) =>{
    debugger
    return {type:SET_SELECTED_TASK,selectedTask}
};
export const setPriority = (priority) =>{
    console.log('setpriority')
    return {type:SET_PRIORITY,priority}
};
export const setUsers = (users) =>{
    console.log('set users')
    return {type:SET_USERS,users}
};
export const setStatuses = (statuses) =>{
    console.log('set statused')
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
        "priorityId": 62266,
        "serviceId": 37360,
        "resolutionDatePlan": "2021-05-21T10:37:06.026Z",
        "tags": [
        ],
        "initiatorId": 37362,
        "executorId": 37361,
        "executorGroupId": 37360
    }

    return async (dispatch)=>{
        await tasksApi.addTask(task)
        dispatch(getTasks())
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

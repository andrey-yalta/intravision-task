import {
    SET_PRIORITY,
    SET_SELECTED_TASK,
    SET_SELECTED_TASK_ID, SET_STATUSES,
    SET_TASKS,
    SET_USERS,
    TOGGLE_IS_FETCHING
} from "./tasks-actions";

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


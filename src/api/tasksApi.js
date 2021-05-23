import * as axios from "axios";
const tenantguid = "1b6e0801-8f5a-43a9-bb65-9c468b3be39d"
const instance = axios.create({
    baseURL:`http://intravision-task.test01.intravision.ru`,
    headers:{'Content-Type': 'application/json'},
});


export const tasksApi  = {
    getTasks ()   {
        return instance.get(`/odata/tasks?tenantguid=${tenantguid}`)
            .then(response=> {
                return response})
    },
    getTaskById(TaskId){
        return instance.get(`/api/${tenantguid}/Tasks/${TaskId}`)
            .then(response=>{
                return response
            })
    },
    getPriority(){
        return instance.get(`/api/${tenantguid}/Priorities`)
            .then(response=> {
                return response})
    },
    getUsers(){
        return instance.get(`/api/${tenantguid}/Users`)
            .then(response=> {
                return response})
    },
    getStatuses(){
        return instance.get(`/api/${tenantguid}/Statuses`)
            .then(response=> {
                return response})
    },
    addTask(task){
        return instance.post(`/api/${tenantguid}/Tasks`,task)
            .then(response=>{

                return response.status
            })
    },
    editTask(task){

        return instance.put(`/api/${tenantguid}/Tasks`,task)
            .then(response=>{
                return response.status
            })
    }
}



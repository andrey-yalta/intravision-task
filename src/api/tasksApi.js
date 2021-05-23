import * as axios from "axios";
const tenantguid = "9d6fbb18-90ea-46cf-b8d3-fc9b4b0394a3"
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



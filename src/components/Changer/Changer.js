import React from "react";
import date from "../../assets/img/date.png"
import {ChangerComment} from "./ChangerComment";

export const Changer =({isChangerOpen,changerOpenHandler,users,statuses,setSelectedStatus,setIsStatusesListOpen,
                           isStatusesListOpen,setSelectedExecutor,setIsExecutorsListOpen,isExecutorsListOpen,
                           setTaskComment,selectedTask,onTaskCHanged,selectedStatus,selectedExecutor,createdAt})=>{

    const osStatusListElementClick = (statusName)=>{
        setSelectedStatus(statusName)
        setIsStatusesListOpen(!isStatusesListOpen)
    }
    const osExecutorListElementClick = (executorName)=>{
        setSelectedExecutor(executorName)
        setIsExecutorsListOpen(!isExecutorsListOpen)
    }
    const onStatusListClick =()=>{
        setIsStatusesListOpen(!isStatusesListOpen)
    }
    const onExecutorListClick =()=>{
        setIsExecutorsListOpen(!isExecutorsListOpen)
    }
    const onTaskCommentInput=(e)=>{
                setTaskComment(e.target.value)
    }

    return(
        <div className= {isChangerOpen?"task-changer":"task-changer changer-none"}>
            <div className="changer__header">
                <span className="changer__header-name">№ {selectedTask && selectedTask.id.toString().slice(0,3) +' ' + selectedTask.id.toString().slice(3)}</span>
                <span className="changer__header-info">{selectedTask && selectedTask.name}</span>
                <span onClick={()=>changerOpenHandler(false)} className="close"/>
            </div>
            <div className="task-changer-content">
                <div className="task-changer__main">
                    <div className="task-changer__description">
                        <span>Описание</span>
                        <p>{selectedTask && selectedTask.description}</p>
                    </div>
                    <form onSubmit={onTaskCHanged} className="task-changer__comment-adder">
                        <span>Добавление комментариев</span>
                        <textarea onChange={onTaskCommentInput} className="changer-textarea" name="changer-textarea">
						</textarea>
                        <button>Сохранить</button>
                    </form>
                    {selectedTask && selectedTask.lifetimeItems.filter(u=>u.comment).map(u=> <ChangerComment key={`${u.id}`} {...u}/>)}
                </div>
                <div className="task-changer__about">
                    <div className="task-changer__status">
                        <label onClick={onStatusListClick}>
                            <div className="task-changer-color status__orange" style={{background:selectedTask && selectedStatus.length>0 && statuses.find(u=> u.name ===selectedStatus).rgb}}/>
                            {selectedTask && selectedStatus}</label>
                        {isStatusesListOpen && <ul className="task-changer-ul">
                            {statuses && statuses.map(u=> <li onClick={()=>osStatusListElementClick(u.name)}  key={`${u.id}_${u.name}`}>{u.name}</li>)}
                        </ul>}
                    </div>
                    <div className="task-changer__declarer">
                        <span>заявитель</span>
                        <label>{selectedTask && selectedTask.initiatorName}</label>
                    </div>
                    <div className="task-changer__createdBy">
                        <span>создана</span>
                        <label>{selectedTask && selectedTask.initiatorName}</label>
                    </div>
                    <div className="task-changer__executor">
                        <span>исполнитель</span>
                        <label onClick={onExecutorListClick}> {selectedTask && selectedExecutor}</label>
                        {isExecutorsListOpen && <ul className="task-changer__ul-executor">
                            {users && users.map(u=> <li  onClick={()=>osExecutorListElementClick(u.name)} key={`${u.id}_${u.name}`}>{u.name}</li>)}
                        </ul>}
                    </div>
                    <div className="task-changer__priority">
                        <span>приоритет</span>
                        <label>{selectedTask && selectedTask.priorityName}</label>
                    </div>
                    <div className="task-changer__date">
                        <span>дата</span>
                        <label> <img src={date} alt="date.png"/>{`${createdAt.getDate()}.${createdAt.getMonth()+1}.${createdAt.getFullYear()} г.`}</label>
                    </div>
                    <div className="task-changer__tags">
                        <span>теги</span>
                        {selectedTask && selectedTask.tags.map(u=><span key={`${u.id}_${u.name}`} className="tag">{u.name}</span>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
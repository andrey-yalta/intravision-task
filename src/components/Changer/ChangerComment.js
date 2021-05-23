import React from 'react'
import autor from "../../assets/img/autor.png";

export const ChangerComment = ({comment,createdAt})=>{
    const createdAtDate =  new Date(Date.parse(createdAt && createdAt))
    return(
        <div className="task-changer__comments">
            <ul>
                <li className="task-changer__comment">
                    <div className="task-changer__comment-autor">
                        <img src={autor} alt="img"/>
                        <div>
                            <span> Менеджер Сергей</span><br/>
                            <span className="date">{`${createdAtDate.getDate()} ${createdAtDate.toLocaleDateString('ru',{month:'long'})}, ${createdAtDate.getHours()}:${createdAtDate.getMinutes()}`}  прокомментировал</span>
                        </div>

                    </div>
                    <div className="task-changer__comment-message">
                        <p>
                            {comment}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
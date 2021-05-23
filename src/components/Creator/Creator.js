import React from "react";

export const Creator = ({isCreatorOpen,creatorOpenHandler,onSubmitForm,setTaskName,taskName,setDescription,description})=>{

    return(
        <div className= {isCreatorOpen?"task-creator":"task-creator creator-none" }>
            <div className="creator__header">
                <span>Новая заявка</span>
                <span onClick={creatorOpenHandler} className="close"/>
            </div>
            <form className="creactor__inputs" onSubmit={onSubmitForm}>
                <label htmlFor="creactor__input-name">Название</label>
                <textarea onInput={e=>setTaskName(e.target.value)} value={taskName} className="creactor__input-name" name="creactor__input-name">
				</textarea>

                <label htmlFor="creactor__input-about">описание</label>
                <textarea onInput={e=>setDescription(e.target.value)} value={description} className="creactor__input-about" name="creactor__input-about"/>
                <button  type="submit">Сохранить</button>
            </form>
        </div>
    )
}
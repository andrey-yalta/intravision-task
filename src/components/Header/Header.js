import React from 'react'
import loupe from '../../assets/img/loupe.png'
import headerPhoto from '../../assets/img/header-photo.png'
export const Header = ()=>{

    return(
        <div className="header">
            <div className="header-search">
                <label htmlFor="header-search__input" className="header-search__field">
                    <input type="text" name="header-search__input"
                           placeholder="Введите Фамилию, Статус, Приоритет, Тег и т.д. чтобы найти заявки"/>
                        <img src={loupe} alt="loupe"/>
                </label>

            </div>
            <div className="header-avatar">
                <div className="header-avatar__info">
                    <span>Менеджер Сергей</span>
                </div>
                <div className="header-avatar__photo">
                    <img src={headerPhoto} alt="avatar"/>

                </div>
            </div>
        </div>
    )
}
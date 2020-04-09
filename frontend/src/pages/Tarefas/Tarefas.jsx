import React from 'react'
import {Link} from 'react-router-dom'

import './Tarefas.css'

export default Tarefas => {
    return (
        <div>
            <header className="menu">
                <div>
                <span>Todo</span>App
                <Link to="/">Tarefas</Link>
                </div>
            </header>
        </div>
    )

}
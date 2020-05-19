import React, { useState } from 'react'

import './index.css'

import CheckIcon from '@material-ui/icons/Check';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default props => {

    const [todo, setTodo] = useState()
    const [hora, setHora] = useState('00:00')
    const [status, setStatus] = useState('Não conluido')


    console.log(status)

    return (
        <table>
            <thead>
                <tr>
                    <th>Tarefa</th>
                    <th>Horario</th>
                    <th>Status</th>
                    <th>Botões</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ir ao cinema</td>
                    <td>21:00</td>
                    <td>Concluido</td>
                </tr>
                <tr>
                    <td><input type="text" placeholder="Digite sua tarefa" value={todo} onChange={e => setTodo(e.target.value)}></input></td>
                    <td><input type="time" placeholder="Digite o horário" value={hora} onChange={e => setHora(e.target.value)}></input></td>
                    <td className={status === 'Não concluido' ? 'Yes' : 'No'}>{status}</td>
                    <td><CheckIcon className="check" style={{width: '30px', height: '30px'}}/> <DeleteForeverIcon className="remove"  style={{width: '30px', height: '30px'}}/></td>
                </tr>
                <tr>
                    <td>Ir ao cinema</td>
                    <td>19:00</td>
                    <td>Concluido</td>
                </tr>
                <tr>
                    <td>Ir ao cinema</td>
                    <td>23:11</td>
                    <td>Concluido </td>
                </tr>

            </tbody>
        </table>
    )
}
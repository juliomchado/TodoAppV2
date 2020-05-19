import React from 'react'

import { Container } from './styles.js'

export default props => {


    return (
        <Container>
            <h1>TODO <span>LIST</span> </h1>
            <div className="div-input">
                <input type="text" placeholder="Pesquisar seu todo..." />
            </div>
            <table>
            <thead>
                <tr>

                    <th>ID</th>
                    <th>Tarefa</th>
                    <th>Horario</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sei la</td>
                    <td>Sei la</td>
                    <td>Sei la</td>
                    <td>Sei la</td>
                </tr>
                <tr>
                    <td>Sei la</td>
                    <td>Sei la</td>
                    <td>Sei la</td>
                    <td>Sei la</td>
                </tr>
                <tr>
                    <td>Sei la</td>
                    <td>Sei la</td>
                    <td>Sei la</td>
                    <td>Sei la</td>
                </tr>
                <tr>
                    <td>Sei la</td>
                    <td>Sei la</td>
                    <td>Sei la</td>
                    <td>Sei la</td>
                </tr>

            </tbody>
        </table>
        </Container>
    )
}
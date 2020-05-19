import React from 'react'

import { Container } from './styles.js'

import Table from '../../components/table'

export default props => {


    return (
        <Container>
            <h1>TODO <span>LIST</span> </h1>
            <div className="div-input">
                <input type="text" placeholder="Pesquisar seu todo..." />
            </div>
           <Table/>
        </Container>
    )
}
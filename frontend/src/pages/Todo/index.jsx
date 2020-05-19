import React from 'react'

import { Container } from './styles.js'

import Table from '../../components/table'

import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default props => {


    return (
        <Container>
            <h1>TODO <span>LIST</span> </h1>
            <div className="div-input">
                <input type="text" placeholder="Pesquisar seu todo..." />
                <SearchIcon className="search"/>
                <AddCircleIcon className="new"/>
            </div>
           <Table/>
        </Container>
    )
}
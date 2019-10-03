import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import ItemCheckbox from './ItemCheckbox';

const ItemTable = (props, { todos, multipleCheck }) => { 
    return (
        <Table striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>

                    </th>
                </tr>
            </thead>
            <tbody>
                {props.res.map((resProps) => (
                    <ItemCheckbox {...resProps} key={resProps.id} onClick={(r) => multipleCheck(resProps)} />
                ))}
            </tbody>
        </Table>
    )
};

ItemTable.propTypes = {
    multipleCheck: PropTypes.func.isRequired
};

 export default ItemTable;

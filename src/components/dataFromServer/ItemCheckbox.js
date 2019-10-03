import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const ItemCheckbox = (props, { onChange }) => { 
    return (
        <tr>
            <td>
                <span>{props.userId}</span>
            </td>
            <td>
                <span>{props.title}</span>
            </td>
            <td>
                <Form.Check type='checkbox' onChange={onChange} />
            </td>
        </tr>
    )
};

ItemCheckbox.propTypes = {
    onClick: PropTypes.func.isRequired,
};

 export default ItemCheckbox;

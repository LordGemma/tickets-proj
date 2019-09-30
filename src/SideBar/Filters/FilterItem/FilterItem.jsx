import React from 'react';
import {
    Form,
} from 'react-bootstrap';

import './FilterItem.css';

const FilterItem = ({
    label,
    value,
    changed,
    isChecked
}) => {
    return (
        <div className='custom-checkbox-wrap'>
            <Form.Check
                type="checkbox"
                label={label}
                custom
                value={value}
                checked={isChecked}
                onChange={changed}
            />
        </div>
    );
};

export default FilterItem;
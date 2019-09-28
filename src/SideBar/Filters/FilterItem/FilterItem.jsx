import React from 'react';
import { 
    Form,
} from 'react-bootstrap';

import './FilterItem.css';

const FilterItem = ({ label, value }) => {
    return (
        <div className='custom-checkbox-wrap'>
            <Form.Check type="checkbox" label={label} custom value={value} />
        </div>
    );
};

export default FilterItem;
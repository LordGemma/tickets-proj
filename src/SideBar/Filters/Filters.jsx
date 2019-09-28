import React from 'react';
import { 
    Form,
} from 'react-bootstrap';
import FilterItem from './FilterItem';

const Filters = () => {
    const labels = [
        {
            label: 'Все',
            value: 'all'
        },
        {
            label: 'Без пересадок',
            value: 0
        },
        {
            label: '1 пересадка',
            value: 1
        },
        {
            label: '2 пересадки',
            value: 2
        },
        {
            label: '3 пересадки',
            value: 3
        },
    ];

    return (
        <Form>
            {
                labels.map(item => (
                    <Form.Group key={`filter-${item.value}`} controlId={`filter-${item.value}`}>
                        <FilterItem label={item.label} value={item.value} changed={(e) => console.log(e.target.value)} />
                    </Form.Group>
                ))
            }
        </Form>
    );
};

export default Filters;
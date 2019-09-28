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
            value: null
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
                    <Form.Group controlId={`filter-${item.value}`}>
                        <FilterItem label={item.label} value={item.value} />
                    </Form.Group>
                ))
            }
        </Form>
    );
};

export default Filters;
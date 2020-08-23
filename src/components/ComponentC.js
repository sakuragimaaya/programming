import React from 'react'
import { Link } from 'react-router-dom'
import ComponentD from './ComponentD'

const ComponentC = () => {
    return (
        <div>
            <div>ComponentC</div>
            <Link to="/">ComponentAへ移動</Link>
            <ComponentD />
        </div>
    );
};

export default ComponentC;

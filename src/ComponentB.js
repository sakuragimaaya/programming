import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const ComponentB = (props) => {


    return (
        <>
            <div>ComponentB</div>
            <Button variant='primary'>Primary</Button>
            <Link to='/componentc' >Componentcへ移動</Link>
        </>
    );
};

export default ComponentB

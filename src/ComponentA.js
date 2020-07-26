import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';

const ComponentA = (props) => {
    const backPage = () => {
        props.history.push('/')
    }
    return (
        <>
            <h1>MENU</h1>

            <ul>
                <li><Link to="/" >HOME</Link></li>
                <li><Link to="componentb" >ComponentBへ移動</Link></li>
                <li><Link to="componentc" >Componentcへ移動</Link></li>
            </ul>
        </>
    );
};

export default ComponentA

import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
        <table>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.date}</td>
            </tr>
        </table>
    );
};

export default Card;
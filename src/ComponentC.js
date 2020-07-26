import React from 'react'
import { Link } from 'react-router-dom'

const ComponentC = (props) => {
    const backPage = () => {
        props.history.push('/')
    }

    return (

        <div>
            <div>ComponentC </div>
            <Link to='/componentb'>componentb</Link>
            <button onClick={backPage}>ホームへ戻る</button>
        </div>
    );
};

export default ComponentC

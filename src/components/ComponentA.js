import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Table } from 'react-bootstrap';

const ComponentA = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('useEffect が呼び出されました');
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                setData(res.data);
            })
    }, []);

    return (
        <div>
            <div>ComponentA</div>
            <Link to="componentb">ComponentBへ移動</Link>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element.userId}</td>
                                <td>{element.id}</td>
                                <td>{element.title}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ComponentA
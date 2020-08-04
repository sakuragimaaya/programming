import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Table } from 'react-bootstrap';


const ComponentB = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data);
            })
    }, []);

    return (
        <div>
            <div>ComponentB</div>
            <Link to="componentc">ComponentCへ移動</Link>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((no, index) => {
                        return (
                            <tr key={index}>
                                <td>{no.userId}</td>
                                <td>{no.id}</td>
                                <td>{no.title}</td>
                                <td>{no.body}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ComponentB
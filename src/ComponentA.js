import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const sampleArray = [
    { id: 1, name: 'aaa', date: 119921125, no: '-' },
    { id: 2, name: 'bbb', date: 119921126, no: '-' },
    { id: 3, name: 'ccc', date: 119921127, no: '-' },
    { id: 4, name: 'ddd', date: 119921128, no: '-' },
    { id: 5, name: 'eee', date: 119921129, no: '-' }
]

const ComponentA = () => {

    return (
        <>
            <h1>MENU</h1>
            <ul>
                <li><Link to='/' >HOME</Link></li>
                <li><Link to='/componentb' >Componentb</Link></li>
                <li><Link to='/componentc' >Componentc</Link></li>
            </ul>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href='#'>Card Link</Card.Link>
                    <Card.Link href='#'>Another Link</Card.Link>
                </Card.Body>
            </Card>

            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>#</th>
                    </tr>

                </thead>

                {sampleArray.map((data, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.date}</td>
                                <td>{data.no}</td>
                            </tr>
                        </tbody>
                    );

                })}
            </Table>
        </>
    );
};

export default ComponentA
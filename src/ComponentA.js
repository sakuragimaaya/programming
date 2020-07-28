import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';

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
        </>
    );
};

export default ComponentA

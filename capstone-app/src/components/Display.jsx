import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

function Display(props) {   

    const toCart = (i) => {
        props.addToCart(i);
    }

    return (
        <CardDeck style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: '2rem'}}>        
        {props.display.map((item, i) => 
            <Card className='displayCard' key={i}>
                <Card.Img src={item.Image} />
                <Card.Body>
            <Card.Header as="h3">{item.Name}</Card.Header>
            <Card.Text>{item.About}</Card.Text>
            <Card.Text>${item.Price.toFixed(2)}</Card.Text>
            <Card.Text>Available: {item.Quantity}</Card.Text>
            <Button className="displayButton" onClick={() => toCart(i)}>Add To Cart</Button>
                </Card.Body>
                </Card> )}
            
        </CardDeck>
    )
}

export default Display

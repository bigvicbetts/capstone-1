import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Redirect} from 'react-router-dom'

function ShoppingCart(props) {

    // Returns array of numbers upto the items total quantity for the select quantity option.
    const qtySelect = (num) => {
        let qty = [];
        for (let i = 0; i <= num; i++) {
            qty.push(i);
        }
        return qty;
    }

    const [arr, setArr] = useState([])

    const handleChange = (e, i) => {
        let temp = [i, e.target.value];
        setArr([...arr, temp])
    }
    
    //console.log(arr) // This is for testing purposes only.
    if (props.shoppingCart.length === 0) {
        return (
            
            <Redirect to='/' />
            
        )
    }

    else {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className='cardDeck' style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: '2rem', width: '66%'}}> 
            {props.shoppingCart.map((item, i) => 
            
            <Card className='displayCard'>
                <Card.Img src={item.Image} />
                <Card.Body>
                <Card.Header as="h3">{item.Name}</Card.Header>
                <Card.Text>{item.About}</Card.Text>
                <Card.Text>${item.Price.toFixed(2)}</Card.Text>
                <Button onClick={() => props.removeFromCart(i)}>Remove From Cart</Button><br/>
                <label style={{margin: '1rem'}}htmlfor="{item.Serial}">Select Quantity</label>
                <select name={item.Name} id="Quantity" onChange={(e) => handleChange(e, i)}>
                    {qtySelect(item.Quantity).map((qty) => 
                    <option key={qty} value={qty} >{qty}</option>)}
                </select>

                </Card.Body>
            </Card>)}
            </div> 
            <div className='personalInfo'>
            <input className='nameAndStreet' type='text' placeholder='Name' />
            <input className='nameAndStreet' type='text' placeholder='Street Address' />
            <input className='city' type='text' placeholder='City' />
            <input className='state' type='text' placeholder='State' />
            <input className='zip' type='number' placeholder='Zip' />
            <Button className='checkOut' onClick={() => props.updateCount(arr)}>Buy Now</Button>
            </div>
            
     </div>
    )
    }
}
export default ShoppingCart
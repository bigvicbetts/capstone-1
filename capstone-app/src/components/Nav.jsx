import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul>
                <Link to='/display'>
                <li>Display</li>
                </Link>
                <Link to='cart'>
                <li>Shopping Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav

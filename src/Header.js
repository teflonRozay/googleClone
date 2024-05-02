// Header.js
import React from 'react';

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <a href="">Gmail</a>
                </li>
                <li>
                    <a href="">Images</a>
                </li>
                <li>
                    <a href=""><img src="./images/menuIcon.png" alt="" /></a>
                </li>
                <li>
                    <button>Sign In</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;

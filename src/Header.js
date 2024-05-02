// Header.js
import React from 'react';

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <a href="google.com/gmail">Gmail</a>
                </li>
                <li>
                    <a href="google.com/images">Images</a>
                </li>
                <li>
                    <a href="google.com/icon"><img src="./images/menuIcon.png" alt="images" /></a>
                </li>
                <li>
                    <button>Sign In</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;

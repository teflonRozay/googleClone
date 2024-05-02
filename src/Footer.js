// Footer.js
import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="row row1"> 
                <p className="country">Nigeria</p>
            </div>
            <div className="row row2">
                <ul>
                    <li><a href="google.com/About">About</a></li>
                    <li><a href="google.com/Advertising">Advertising</a></li>
                    <li><a href="google.com/Business">Business</a></li>
                    <li><a href="google.com/How Search works">How Search works</a></li>
                </ul>
                <ul>
                    <li><a href="google.com/Privacy">Privacy</a></li>
                    <li><a href="google.com/Terms">Terms</a></li>
                    <li><a href="google.com/Settings">Settings</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;

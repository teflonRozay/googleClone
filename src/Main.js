// Main.js
import React,{ useState } from 'react';
import Google from "./images/google.png"
import Search from "./images/search.png"
import Mic from "./images/mic.png"
import Speaker from "./images/googlelens.png"

function Main() {
    
    const [query, setQuery] = useState('');

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        if (query.trim() !== '') {
            const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(url, '_blank');
        }
    };



    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };






    return (
        <div className="main">
            <img src={Google} alt="" />
            <div className="searchBox">
                <input type="text" className="search"    value={query}
            onChange={handleQueryChange}
            onKeyPress={handleKeyPress} />
                <div className="icons">
                    <div>
                        <img src={Search} alt="" />
                    </div>
                    <div className="miclens">
                        <img src={Mic} alt="" />
                        <img src={Speaker} alt="" />
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button onClick={handleSearch}>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            <ul className="languages">
                <li>Google offered in:</li>
                <li>
                    <a href="#">Hausa</a>
                </li>
                <li>
                    <a href="#">Igbo</a>
                </li>
                <li>
                    <a href="#"> Èdè Yorùbá</a>
                </li>
                <li>
                    <a href="#">Nigerian Pidgin English</a>
                </li>
                
            </ul>
        </div>
    );
}

export default Main;

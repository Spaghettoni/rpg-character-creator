import React from 'react';
import './App.scss';
import {Link} from "react-router-dom";

const App = () => {
    return (
        <main className="App">
            <header className="App-header">
                <h1>Welcome to RPG character creator!</h1>
                <Link to='/login'>
                    <button className='login-button'>
                        Login
                    </button>
                </Link>
            </header>
        </main>
    );
}

export default App;

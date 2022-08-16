import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import {GET_USERS} from "./queries/user";


const App = () => {

    const { loading, error, data } = useQuery(GET_USERS);

    useEffect(() => {

    }, []);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {data.allUsers.map((user: any, index: number) => (
                    <p key={index}>
                        User {index} : {user.email}
                    </p>
                ))}
            </header>
        </div>
    );
}

export default App;

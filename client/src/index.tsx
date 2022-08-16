import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {Login} from "./routes/login";
import {CreateCharacter} from "./routes/createCharacter";
import {CharacterList} from "./routes/characterList";

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
        <React.StrictMode>
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/create" element={<CreateCharacter />} />
                        <Route path="/list" element={<CharacterList />} />
                    </Routes>
                </BrowserRouter>
            </ApolloProvider>
        </React.StrictMode>
);
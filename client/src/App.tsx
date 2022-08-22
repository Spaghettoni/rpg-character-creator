import React, {useState} from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {Login} from "./routes/login";
import {CreateCharacter} from "./routes/createCharacter";
import {CharacterList} from "./routes/characterList";
import {GlobalContext} from './context';

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
});

const App = () => {
    const [user, setUser] = useState<string | null>(null);

    return (
        <React.StrictMode>
            <ApolloProvider client={client}>
                <GlobalContext.Provider value={{
                    user, setUser
                }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/create" element={<CreateCharacter />} />
                            <Route path="/list" element={<CharacterList />} />
                        </Routes>
                    </BrowserRouter>
                </GlobalContext.Provider>
            </ApolloProvider>
        </React.StrictMode>
    );
}

export default App;

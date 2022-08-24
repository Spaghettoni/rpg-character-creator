import {ChangeEvent, FormEvent, useContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useLazyQuery, useMutation} from "@apollo/client";
import {CREATE_USER, GET_USER_BY_EMAIL} from "../../queries/user";
import {GET_USER_CHARACTERS} from "../../queries/character";
import {GlobalContext} from "../../context";
import {User} from "../../types";


export const useLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [getUserByEmail, {data, loading, refetch}] = useLazyQuery(GET_USER_BY_EMAIL);
    const [createUser, _] = useMutation(CREATE_USER);
    const {setUser} = useContext(GlobalContext);

    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

    useEffect(() => {
        if (!loading && data !== undefined) {
            if (data.getUserByEmail !== null){
                login(data.getUserByEmail)
            } else {
                register().then(newUser => {
                    login(newUser.data.createUser)
                }).catch(error => alert(error))
            }
        }
    }, [loading]);

    const onLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (email === '') {
            setError('Please enter email address!');
            return
        } else if (!isValidEmail()) {
            setError('Not a valid email address!')
            return
        }
        const user = await fetchUser();
        console.log('user:', user);

        // if (user.data.getUserByEmail !== null){
        //     login(user.data.getUserByEmail)
        // } else {
        //     await register().then(newUser => {
        //         login(newUser.data.createUser)
        //     }).catch(error => alert(error))
        // }
    }

    const fetchUser = async () => {
        return await getUserByEmail({
            variables: {
                email
            }
        });
    }

    const login = async ({id, email}: User) => {
        setUser({
            id,
            email,
            characters: []
        });
        navigate('/list')
    }

    const register = async () => {
        return await createUser({
            variables: {
                email
            }
        })
    }

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setError('');
        setEmail(event.target.value);
    }

    const isValidEmail = () => {
        return emailRegex.test(email)
    }

    return {
        onLogin, handleInput, email, error,
    }
}
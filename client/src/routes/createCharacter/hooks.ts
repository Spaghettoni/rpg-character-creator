import {ChangeEvent, FormEvent, useContext, useEffect, useState} from "react";
import {Character, Race} from "../../types";
import {useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {CREATE_CHARACTER} from "../../queries/character";
import {GlobalContext} from "../../context";

export const useCreateCharacter = () => {
    const navigate = useNavigate();
    const {user, setUser} = useContext(GlobalContext);
    const [newCharacter, setNewCharacter] = useState<Character>({
        firstName: '',
        lastName: '',
        age: 18,
        race: Race.HUMAN,
        bio: '',
    });
    const [error, setError] = useState({
        firstName: '',
        lastName: '',
    });
    const [createCharacter, _] = useMutation(CREATE_CHARACTER)

    useEffect(() => {
        if (user === null) {
            navigate('/');
        }
    }, [user]);

    const onCreate = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newCharacter.firstName.length > 0 && newCharacter.firstName.length <= 50) {
            if (newCharacter.lastName.length > 0 && newCharacter.lastName.length <= 50) {
                await createNewCharacter()
            } else {
                setError({...error, lastName: 'Please enter last name!'});
            }
        } else {
            setError({...error, lastName: 'Please enter first name!'});
        }
    }

    const createNewCharacter = async () => {
        await createCharacter({
            variables: {
                firstName: newCharacter.firstName,
                lastName: newCharacter.lastName,
                age: newCharacter.age,
                race: newCharacter.race,
                bio: newCharacter.bio,
                userId: user!.id
            }
        }).then(newCharacter => {
            if (newCharacter.data.createCharacter !== null && user !== null && user.characters !== null)
            setUser({
                ...user,
                characters: [...user.characters, newCharacter.data.createCharacter]
            })
            navigate('/list')
        }).catch(error => alert(error))
            .finally(() => {
                console.log(user)
            })
    }

    const handleInput = (event: ChangeEvent<
                                HTMLInputElement |
                                HTMLSelectElement |
                                HTMLTextAreaElement>) => {
        setNewCharacter({...newCharacter, [event.target.name]: event.target.value});
        if (event.target.name === 'firstName' || event.target.name === 'lastName'){
            setError({...error, [event.target.name]: ''});
        }
    }

    return {
        newCharacter, handleInput, onCreate, error
    }
}
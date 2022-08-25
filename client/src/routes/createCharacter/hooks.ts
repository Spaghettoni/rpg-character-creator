import {ChangeEvent, FormEvent, useContext, useEffect, useState} from "react";
import {Character, Race} from "../../types";
import {useLocation, useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {CREATE_CHARACTER, EDIT_CHARACTER} from "../../queries/character";
import {GlobalContext} from "../../context";

export const useCreateCharacter = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {id} = state as Character;
    const {user, setUser} = useContext(GlobalContext);
    const [isCreating, __] = useState(!state);
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
    const [editCharacter, ___] = useMutation(EDIT_CHARACTER);


    useEffect(() => {
        if (user === null) {
            navigate('/');
        }

        if(state !== null) {
            const {firstName, lastName, age, race, bio} = state as Character
            setNewCharacter({
                firstName,
                lastName,
                age,
                race,
                bio
            })
        }
    }, [user]);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newCharacter.firstName.length > 0 && newCharacter.firstName.length <= 50) {
            if (newCharacter.lastName.length > 0 && newCharacter.lastName.length <= 50) {
                if (isCreating) {
                    await createNewCharacter()
                } else {
                    if (id)
                    await onEditCharacter(id, newCharacter)
                        .catch(error => alert(error))
                        .finally(() => navigate('/list'))
                }
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

    const onEditCharacter = async (characterId: number, characterData: Character) => {
        const newCharacters = user!.characters.map(char => {
            if (char.id === characterId) {
                return characterData
            }
            return char
        });
        setUser({
            ...user!,
            characters: newCharacters
        })
        return await editCharacter({
            variables: {
                editCharacterId: characterId,
                firstName: characterData.firstName,
                race: characterData.race,
                bio: characterData.bio,
                age: characterData.age,
            }
        });
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
        newCharacter, handleInput, onSubmit, isCreating, error
    }
}
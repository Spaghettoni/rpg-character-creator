import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../context";
import {Character} from "../../types";
import {useLazyQuery, useMutation} from "@apollo/client";
import {DELETE_CHARACTER, EDIT_CHARACTER, GET_USER_CHARACTERS} from "../../queries/character";
import {useNavigate} from "react-router-dom";

export const useCharacterList = () => {
    const {user, setUser} = useContext(GlobalContext);
    const navigate = useNavigate();
    const [getCharacters, {data, loading, refetch}] = useLazyQuery(GET_USER_CHARACTERS);
    const [deleteCharacter, __] = useMutation(DELETE_CHARACTER);

    useEffect(() => {
        if (user) {
            if (user.characters.length === 0) {
                fetchCharacters(user.id).then(result => {
                    if (result.data.getUserCharacters) {
                        setUser({
                            ...user,
                            characters: result.data.getUserCharacters
                        })
                    }
                }).catch(error => alert(error));
            }
        } else {
            navigate('/');
        }
    }, []);

    const fetchCharacters = async (userId: number) => {
        return await getCharacters({
            variables: {
                userId
            }
        });
    }

    const onDeleteCharacter = async (characterId: number) => {
        const newCharacters = user!.characters.filter(character => character.id !== characterId);
        setUser({
            ...user!,
            characters: newCharacters
        })
        return await deleteCharacter({
            variables: {
                deleteCharacterId: characterId
            }
        });
    }

    const logout = () => {
        setUser(null);
        navigate('/');
    }

    return {
        user, onDeleteCharacter, logout
    }
}
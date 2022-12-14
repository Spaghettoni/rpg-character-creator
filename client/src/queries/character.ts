import {gql} from "@apollo/client";

export const GET_USER_CHARACTERS = gql(`
    query GetUserCharacters($userId: Float!) {
      getUserCharacters(userId: $userId) {
        id
        firstName
        lastName
        race
        age
        bio
        userId
      }
    }
`);

export const CREATE_CHARACTER = gql(`
    mutation CreateCharacter($bio: String!, $race: String!, $age: Float!, $lastName: String!, $firstName: String!, $userId: Float!) {
        createCharacter(bio: $bio, race: $race, age: $age, lastName: $lastName, firstName: $firstName, userId: $userId) {
            id
            firstName
            lastName
            race
            age
            bio
            userId
        }
    }
`)

export const EDIT_CHARACTER = gql(`
    mutation EditCharacter($bio: String!, $race: String!, $age: Float!, $firstName: String!, $editCharacterId: Float!) {
        editCharacter(bio: $bio, race: $race, age: $age, firstName: $firstName, id: $editCharacterId) {
            id
        }
    }
`);

export const DELETE_CHARACTER = gql(`
    mutation DeleteCharacter($deleteCharacterId: Float!) {
        deleteCharacter(id: $deleteCharacterId) {
            id
        }
    }
`);
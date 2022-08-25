import {gql} from "@apollo/client";

export const GET_USERS = gql(`
    query AllUsers {
        allUsers {
            email
        }
    }
`);

export const GET_USER_BY_EMAIL = gql(`
    query GetUserByEmail($email: String!) {
        getUserByEmail(email: $email) {
            id, email, characters {
                id
                firstName
                lastName
                age
                race
                bio
            }
        }
    }
`);

export const CREATE_USER = gql(`
    mutation CreateUser($email: String!) {
        createUser(email: $email) {
            id, email, characters {
                id
                firstName
                lastName
                age
                race
                bio
            }
        }
    }
`)
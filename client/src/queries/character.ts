import {gql} from "@apollo/client";

export const CREATE_CHARACTER = gql(`
    mutation CreateCharacter($email: String!) {
        createUser(email: $email) {
            email
        }
    }
`)
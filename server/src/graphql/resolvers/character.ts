import "reflect-metadata";
import {Character} from "../typeDefs/character";
import {Arg, Mutation, Query, Resolver} from "type-graphql";
import prisma from "../../prisma/client";
import {Race} from '@prisma/client';


@Resolver(Character)
export class CharacterResolver {

    @Query(() => [Character])
    async getAllCharacters() {
        return prisma.character.findMany()
    }

    @Query(() => [Character], {nullable: true})
    async getUserCharacters(
        @Arg("userId") userId: number) {
        return prisma.character.findMany({
            where: {
                userId: userId
            }
        })
    }

    @Mutation(() => Character)
    async editCharacter(
        @Arg("id") id: number,
        @Arg("firstName") firstName: string,
        @Arg("lastName") lastName: string,
        @Arg("age") age: number,
        @Arg("race") race: Race,
        @Arg("bio") bio: string
    ) {
        return prisma.character.update({
            where: {
                id
            },
            data: {
                firstName,
                lastName,
                age,
                race,
                bio
            }
        });
    }

    @Mutation(() => Character)
    async deleteCharacter(
        @Arg("id") id: number,
    ) {
        return prisma.character.delete({
            where: {
                id
            }
        });
    }

    @Mutation((returns) => Character)
    async createCharacter(
        @Arg("userId") userId: number,
        @Arg("firstName") firstName: string,
        @Arg("lastName") lastName: string,
        @Arg("age") age: number,
        @Arg("race") race: Race,
        @Arg("bio") bio: string
    ) {
        return await prisma.character.create({
            data: {
                firstName,
                lastName,
                age,
                race,
                bio,
                userId
            }
        });

        // prisma.user.update({
        //             where: {
        //                 id: userId
        //             },
        //             data: {
        //                 characters: {
        //                     create: [
        //                         {
        //                             firstName: firstName,
        //                             lastName: lastName,
        //                             age: age,
        //                             race: race,
        //                             bio: bio,
        //                         }
        //                     ]
        //                 }
        //             }
    }
}

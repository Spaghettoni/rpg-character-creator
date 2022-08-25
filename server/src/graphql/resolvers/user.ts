import "reflect-metadata";
import {Arg, Mutation, Query, Resolver} from "type-graphql";
import prisma from "../../prisma/client";
import {User} from "../typeDefs/user";
import {Character} from "../typeDefs/character";
import {Race} from "@prisma/client";
// import {Race} from "../typeDefs/race";
// import {Race, Character} from '@prisma/client'

@Resolver(User)
export class UserResolver {

    @Query(() => [User], {nullable: true})
    async allUsers() {
        return prisma.user.findMany()
    }

    @Query(() => User, {nullable: true})
    async getUserById(id: number) {
        return await prisma.user.findUnique({
            where: {
                id: id,
            },
        })
    }

    @Query(() => User, {nullable: true})
    async getUserByEmail(
        @Arg("email") email: string,
     ) {
        return await prisma.user.findUnique({
            where: {
                email: email,
            },
        })
    }

    @Mutation((returns) => User)
    async createUser(
        @Arg("email") email: string,
    ) {
        return await prisma.user.create({
            data: {
                email: email,
            }
        })
    }
}
import "reflect-metadata";
import {Arg, Mutation, Query, Resolver} from "type-graphql";
import prisma from "../../prisma/client";
import {User} from "../typeDefs/user";

@Resolver(User)
export class UserResolver {

    @Query(() => [User], {nullable: true})
    async allUsers() {
        return prisma.user.findMany()
    }

    @Query(() => User, {nullable: true})
    async getUserById(id: number) {
        return prisma.user.findUnique({
            where: {
                id: id,
            },
        })
    }

    @Query(() => User, {nullable: true})
    async getUserByEmail(
        @Arg("email") email: string,
     ) {
        return prisma.user.findUnique({
            where: {
                email: email,
            },
        })
    }

    @Mutation((returns) => User)
    async createUser(
        @Arg("email") email: string,
    ) {
        return prisma.user.create({
            data: {
                email: email,
            }
        })
    }
}
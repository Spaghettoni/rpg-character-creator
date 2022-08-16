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
    async getUser(id: number) {
        return prisma.user.findUnique({
            where: {
                id: id,
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
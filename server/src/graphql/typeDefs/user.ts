import "reflect-metadata";
import {Field, Int, ObjectType} from "type-graphql";
import {Character} from "./character";

@ObjectType()
export class User {

    @Field(() => Int, {nullable: false})
    id!: number

    @Field(() => String, {nullable: false})
    email!: string

    @Field((type) => [Character], { nullable: true })
    characters!: [Character] | null

}
import "reflect-metadata";
import {Field, ObjectType} from "type-graphql";
import {Character} from "./character";

@ObjectType()
export class User {

    @Field(() => String, {nullable: false})
    email!: string

    @Field((type) => [Character], { nullable: true })
    characters!: [Character] | null

}
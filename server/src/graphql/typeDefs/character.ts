import "reflect-metadata";
import {Field, ID, Int, ObjectType, registerEnumType} from "type-graphql";
import {RaceType} from "./race";
import {Race} from '@prisma/client'
//
// export enum Race {
//     HUMAN,
//     ELF,
//     ORC,
//     DWARF
// }
//
// registerEnumType(Race, {
//     name: "Race",
//     description: "Type of race"
// });


@ObjectType()
export class Character {

    @Field(() => Int, {nullable: false})
    id!: number

    @Field(() => String, {nullable: false })
    firstName!: string

    @Field(() => String, { nullable: false })
    lastName!: string

    @Field(() => String, { nullable: false })
    race!: string

    @Field(() => Int, { nullable: false })
    age!: number

    @Field(() => String, { nullable: true })
    bio?: string

    @Field(() => Int, { nullable: false })
    userId!: number
}
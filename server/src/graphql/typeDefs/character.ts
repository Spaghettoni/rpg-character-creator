import "reflect-metadata";
import {Field, ObjectType, registerEnumType} from "type-graphql";

enum Race {
    HUMAN,
    ELF,
    ORC,
    DWARF
}

registerEnumType(Race, {
    name: "Race",
    description: "Type of race"
});

@ObjectType()
export class Character {

    @Field(() => String, {nullable: false })
    firstName!: string

    @Field(() => String, { nullable: false })
    lastName!: string

    @Field(type => Race, { nullable: false })
    race!: Race

    @Field(() => Number, { nullable: false })
    age!: number

    @Field(() => String, { nullable: true })
    bio?: string

    @Field(() => Number, { nullable: false })
    userId!: number
}
import {Query, Resolver} from "type-graphql";

@Resolver()
export class UserResolver {

    @Query(() => String)
    name() {
        return "My name";
    }
}
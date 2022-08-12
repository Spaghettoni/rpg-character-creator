import {buildSchemaSync} from 'type-graphql';
import {UserResolver} from "./resolvers/user";

export const schema = buildSchemaSync({
    resolvers: [UserResolver],
});

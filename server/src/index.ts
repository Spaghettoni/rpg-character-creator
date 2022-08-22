import "reflect-metadata";
import express, {Express} from "express";
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {UserResolver} from "./graphql/resolvers/user";
import prisma from "./prisma/client"
import {CharacterResolver} from "./graphql/resolvers/character";
import cors from 'cors';


const main = async () => {
    //src
    const app: Express = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver, CharacterResolver],
            validate: false,
        })
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({app});

    const PORT = process.env.PORT || 8000;

    app.use(cors());

    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`)
    })

}

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    // some other closing procedures go here
    process.exit(0);
});

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (err) => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
})


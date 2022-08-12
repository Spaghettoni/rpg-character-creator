import "reflect-metadata";
import express, {Express} from "express";
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {UserResolver} from "./graphql/resolvers/user";
import prisma from "./prisma/client"
import {CharacterResolver} from "./graphql/resolvers/character";

const main = async () => {
    //server
    const app: Express = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver, CharacterResolver],
            validate: false,
        })
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({app});

    const PORT = process.env.PORT || 5000;

    app.use(express.static("public"));

    // app.get('/', (req, res) => {
    //     res.sendFile(path.join(__dirname, "public", "index.html"))
    // })

    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`)
    })
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (err) => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
})


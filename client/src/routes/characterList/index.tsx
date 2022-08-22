import {useContext} from "react";
import {GlobalContext} from "../../context";

export const CharacterList = () => {
    const {user} = useContext(GlobalContext)

    return (
        <main>
            <section className={'container'}>
                <header>
                    <h1>User: {user}</h1>
                    <h2>Your characters</h2>
                    <p></p>
                </header>
            </section>
        </main>
    )
}
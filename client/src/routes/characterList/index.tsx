import {useContext} from "react";
import {GlobalContext} from "../../context";
import {ButtonComponent} from "../../components/button";
import {Link} from "react-router-dom";

export const CharacterList = () => {
    const {user, characters} = useContext(GlobalContext)

    return (
        <main>
            <section className={'container'}>
                <header>
                    <h1>User: {user}</h1>
                    <h2>Your characters</h2>

                    <section>
                    {(characters === null || characters?.length === 0) ?
                     (<p>You currently do not have any characters!</p>) :
                        (
                         <div>
                             {characters.map((character, index) => (
                                 <div key={index}>
                                     {character}
                                 </div>
                             ))}
                         </div>
                        )
                    }
                    </section>

                    <Link to={'/create'}>
                        <ButtonComponent text={'Create new character'}/>
                    </Link>
                </header>
            </section>
        </main>
    )
}
import {ButtonComponent} from "../../components/button";
import {Link, useNavigate} from "react-router-dom";
import {useCharacterList} from "./hooks";

export const CharacterList = () => {
    const {user} = useCharacterList();

    if (user === null) {
        return (
            <main>
                <section className={'container'}>
                    <h1>You need to be logged in!</h1>
                    <Link to={'/'}>
                        <ButtonComponent
                            name={'login-button'}
                            text={'Login'}
                        />
                    </Link>
                </section>
            </main>
        )
    }
    return (
        <main>
            <section className={'container'}>
                <header>
                    <h2>Your characters ({user.email})</h2>

                    <section>
                    {(user.characters === null || user.characters.length === 0) ?
                     (<p>You currently do not have any characters!</p>) :
                        (
                         <div>
                             {user.characters.map((character, index) => (
                                 <div key={index}>
                                     {character.id} {character.firstName} {character.lastName} {character.race}
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
import {useContext} from "react";
import {GlobalContext} from "../../context";
import {ButtonComponent} from "../../components/button";
import {Link, useNavigate} from "react-router-dom";

export const CharacterList = () => {
    const {user, characters} = useContext(GlobalContext)

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
                    <h2>Your characters ({user})</h2>

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
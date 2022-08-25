import {ButtonComponent} from "../../components/button";
import {Link} from "react-router-dom";
import {useCharacterList} from "./hooks";
import {CharacterComponent} from "../../components/character";
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';

export const CharacterList = () => {
    const {user, onDeleteCharacter, logout} = useCharacterList();

    if (user === null) {
        return (
            <main>
            </main>
        )
    }
    return (
        <main>
            <section className={'container'}>
                <header>
                    <div id={'logout-container'}>
                        <ButtonComponent
                            id={'logout-button'}
                            text={'Logout'}
                            name={'logout-button'}
                            onClick={() => logout()}
                        >
                            <LogoutIcon/>
                        </ButtonComponent>
                    </div>
                    <h2>Your characters ({user.email})</h2>
                </header>
                    <section>
                    {(user.characters === null || user.characters.length === 0) ?
                     (<p>You currently do not have any characters!</p>) :
                        (
                         <table className={'grid-container'}>
                             <thead>
                             <tr>
                                 <th>#</th>
                                 <th>First name</th>
                                 <th>Last name</th>
                                 <th>Age</th>
                                 <th>Race</th>
                                 <th>Bio</th>
                                 <th>Edit</th>
                                 <th>Delete</th>
                             </tr>
                             </thead>
                                <tbody>
                                 {user.characters.map((character, index) => (
                                     <CharacterComponent
                                         key={index}
                                         index={index}
                                         character={character}
                                         user={user!}
                                         onDelete={onDeleteCharacter}
                                     />
                                 ))}
                                </tbody>
                         </table>
                        )
                    }
                    </section>

                    <Link to={'/create'}>
                        <ButtonComponent id={'create-button'} text={'Create new character'}>
                            <AddBoxIcon fontSize={'small'}/>
                        </ButtonComponent>
                    </Link>

            </section>
        </main>
    )
}
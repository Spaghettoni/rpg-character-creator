import {Character, User} from "../../types";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";

type CharacterComponentProps = {
    index: number
    character: Character,
    user: User,
    onDelete: any,
}
export const CharacterComponent = (props: CharacterComponentProps) => {
    const {id: characterId, firstName, lastName, age, race, bio} = props.character;
    const {id: userId, email} = props.user;

    return (
        <tr className={'grid-row'}>
            <td className={'index cell'}>{props.index + 1}</td>
            <td className={'firstName cell'}>{firstName}</td>
            <td className={'lastName cell'}>{lastName}</td>
            <td className={'age cell'}>{age}</td>
            <td className={'race cell'}>{race}</td>
            <td className={'bio cell'}>{!bio ? '-' : bio}</td>
            <td className={'edit cell'}>
                <Link to={{pathname:'/create'}} state={props.character} title={'edit-character-link'}>
                    <button id={'edit-button'} className={'table-button'}
                            aria-label={'edit-character-button'}
                    >
                        <EditIcon/>
                    </button>
                </Link>
            </td>
            <td className={'delete cell'}>
                <button id={'delete-button'} className={'table-button'}
                        aria-label={'delete-character-button'}
                        onClick={() => props.onDelete(characterId)}
                >
                    <DeleteIcon />
                </button>
            </td>
        </tr>
    )
}
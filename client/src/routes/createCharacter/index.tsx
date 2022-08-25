import {InputComponent} from "../../components/input";
import {ButtonComponent} from "../../components/button";
import {useCreateCharacter} from "./hooks";
import {Race} from "../../types";
import {Link} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const CreateCharacter = () => {
    const {newCharacter, handleInput, onSubmit, isCreating, error} = useCreateCharacter();

    return (
        <main>
            <section className={'container'}>
                <header>
                    <div id={'back-container'}>
                        <Link to={'/list'}>
                            <ButtonComponent
                                id={'back-button'}
                                text={''}
                                name={'back-button'}
                            >
                                <ArrowBackIcon/>
                            </ButtonComponent>
                        </Link>
                    </div>
                    <h2>{isCreating ? 'Create new character' : 'Edit character'}</h2>
                </header>
                <form id='login-form' onSubmit={onSubmit}>
                    <label>
                        First name:
                        <InputComponent
                            error={!!error.firstName ? 1 : 0}
                            type={'text'}
                            name={'firstName'}
                            value={newCharacter.firstName}
                            onChange={handleInput}
                            placeholder={'Jozef'}
                            alt={'first-name-input'}
                            autoFocus
                        />
                        {/*<span className={'error'}>{error.firstName}</span>*/}
                    </label>
                    <label>
                        Last name:
                        <InputComponent
                            // error={!!error.lastName}
                            type={'text'}
                            name={'lastName'}
                            value={newCharacter.lastName}
                            onChange={handleInput}
                            placeholder={'Mak'}
                            alt={'last-name-input'}
                            disabled={!isCreating}
                        />
                        {/*<span className={'error'}>{error.lastName}</span>*/}
                    </label>
                    <label>
                        Age:
                        <InputComponent
                            type={'number'}
                            name={'age'}
                            value={newCharacter.age}
                            onChange={handleInput}
                            placeholder={''}
                            alt={'age-input'}
                        />
                    </label>
                    <label>
                        Race:
                        <select
                            name={'race'}
                            value={newCharacter.race}
                            onChange={handleInput}
                            placeholder={'HUMAN'}
                        >
                            {Object.values(Race).map((race, index) => (
                                <option key={index} value={race}>{race}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Bio:
                        <textarea
                            name={'bio'}
                            value={newCharacter.bio}
                            onChange={handleInput}
                            placeholder={'Little bit about yourself...'}
                            rows={5}
                        />
                    </label>
                    <ButtonComponent
                        id={'create-button'}
                        type={'submit'}
                        name={'create-button'}
                        text={isCreating ? 'Create' : 'Edit'}
                    />
                </form>
            </section>
        </main>
    )
}
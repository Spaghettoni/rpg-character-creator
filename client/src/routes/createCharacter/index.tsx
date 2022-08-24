import {InputComponent} from "../../components/input";
import {ButtonComponent} from "../../components/button";
import {useCreateCharacter} from "./hooks";
import {Race} from "../../types";
import './styles.scss';

export const CreateCharacter = () => {
    const {newCharacter, handleInput, onCreate, error} = useCreateCharacter();

    return (
        <main>
            <section className={'container'}>
                <header>
                    <h2>Create new character:</h2>
                </header>
                <form id='login-form' onSubmit={onCreate}>
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
                        type={'submit'}
                        name={'create-button'}
                        text={'Create'}
                    />
                </form>
            </section>
        </main>
    )
}
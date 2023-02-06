import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers.js';

function Contact() {
    const [formState, setFormState] = ({
        name: '',
        email: '',
        message: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Invalid Email');
            }
            else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required`);
                }
                else {
                    setErrorMessage('');
                }
            }
        }    

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    }

    return (
        <section>
            <div className='center'>
                <h1 className='page-header'>Contact Me</h1>
            </div>

            <div>
                <form id='contactMe-form'>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <br></br>
                        <input type='text' name='name' defaultValue={name} onBlur={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor='email'>Email:</label>
                        <br></br>
                        <input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor='message'>Message:</label>
                        <br></br>
                        <input rows='5' name='message' defaultValue={message} onBlur={handleChange}/>
                    </div>

                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
import React from 'react';

const Register = () => {
    return (
        <form>
            <input
                type='text'
                id='name'
                name='name'
                placeholder='user name'
            />
            <input
                type='text'
                id='email'
                name='email'
                placeholder='email'
            />
            <input
                type='password'
                id='password'
                name='password'
                placeholder='password'
            />
            <button type='submit'>SIGNUP</button>
        </form>
    );
}

export default Register;
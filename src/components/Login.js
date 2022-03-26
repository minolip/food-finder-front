import React from 'react';

const Login = () => {
    return (
        <form>
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
            <button type='submit'>SIGNIN</button>
        </form>
    );
}

export default Login;
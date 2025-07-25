import { useState } from 'react';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        // Here you would typically handle the login logic, such as sending a request to your server    
    }

    function handleUsernameChange(event) {
        console.log('Username changed:', event.target.value);
        setUsername(event.target.value);
    }

    function handlePwdChange(event) {
        console.log('Password changed:', event.target.value);
        setPassword(event.target.value);
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={handlePwdChange}/>
                </label>
                <br />
                <button type="submit" >Login</button>
            </form>
        </div>
    );
}

export default Login;
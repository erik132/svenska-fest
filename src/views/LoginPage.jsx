import { useState } from 'react'
import PageSwapButton from "../components/PageSwapButton.jsx"
import axios from "axios";
import Cookies from 'js-cookie'

function LoginPage({onPageSwap}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [responseMsg, setResponseMsg] = useState();

    const landingPage = 'LandingPage';

    const loginFormSubmitted = (e) => {
        e.preventDefault();
        axios.post('/users/login',
            {username:username, password:password},)
            .then(function (response) {
                console.log(response.data);
                onPageSwap(landingPage);
                Cookies.set('Authorization', response.data.token, { expires: 1 });
            })
            .catch(function (error) {
                console.log(error.response.data.message);
                setResponseMsg("Error happened: " + error.response.data.message);
            });

    }

    return (<div>
        <h1>Login page</h1>
        <PageSwapButton onPageSwap={onPageSwap} targetPage={landingPage} displayName='Back to main' />
        <form onSubmit={loginFormSubmitted}>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {responseMsg && <p>{responseMsg}</p>}
        </form>
    </div>);
}

export default LoginPage;
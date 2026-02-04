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
        <div style={{position: 'absolute', top: '1rem', right: '1rem'}}>
            <PageSwapButton onPageSwap={onPageSwap} targetPage={landingPage} displayName='Back to main' />
        </div>
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-10-tablet is-8-desktop is-6-widescreen">
                            <div className="box" style={{minWidth: '400px', margin: '0 auto'}}>
                                <h1 className="title has-text-centered">Login</h1>
                                <form onSubmit={loginFormSubmitted}>
                                    <div className="field">
                                        <div className="control">
                                            <input className="input" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-primary is-fullwidth" type="submit">Login</button>
                                        </div>
                                    </div>
                                    {responseMsg && <div className="notification is-danger">{responseMsg}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>);
}

export default LoginPage;
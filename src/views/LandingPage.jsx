import { useState } from 'react'
import PageSwapButton from "../components/PageSwapButton.jsx"
import EventsDisplay from "../components/EventsDisplay.jsx"
import EventDisplay from "../components/EventDisplay.jsx"
import EventCreationDisplay from "../components/EventCreationDisplay.jsx"
import Cookies from 'js-cookie'

function LandingPage({onPageSwap}) {
    const [currentEventId, setCurrentEventId] = useState(-1);
    const [eventsCreatedCount, setEventsCreatedCount] = useState(0);
    const auth = Cookies.get('Authorization');
    const [isLoggedIn, setIsLoggedIn] = useState(auth != null && auth !== 'null');

    const selectEvent = (eventId) => {
        console.log("New eventId " + eventId);
        setCurrentEventId(eventId);
    }

    const refreshLogin = () => {
        const authCookie = Cookies.get('Authorization');
        setIsLoggedIn(authCookie != null && authCookie !== 'null');
    }

    const eventCreationSuccessful = () => {
        setEventsCreatedCount(eventsCreatedCount + 1);
    }

    const handleLoginLogout = () => {
        if (isLoggedIn) {
            Cookies.remove('Authorization');
            setIsLoggedIn(false);
        } else {
            onPageSwap('LoginPage');
        }
    }

    const getEventCreationDisplay = () => {
        if (isLoggedIn === true) {
            return <EventCreationDisplay eventCreatedSuccessfully={eventCreationSuccessful}
                                         refreshLogin={refreshLogin}/>;
        } else {
            return <button className="notification is-info" onClick={handleLoginLogout}>Log in to create events.</button>;
        }
    }

    return (<div>
        <div style={{position: 'absolute', top: '1rem', right: '1rem'}}>
            <button className="button is-primary" onClick={handleLoginLogout}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
        <section className="section">
            <div className="container">
                <h1 className="title is-1 has-text-centered">Svenska Fest</h1>
                <div className="columns">
                    <div className="column is-half">
                        <h2 className="title is-3">Events</h2>
                        <EventsDisplay selectEvent={selectEvent} refreshCounter={eventsCreatedCount}/>
                    </div>
                    <div className="column is-half">
                        <EventDisplay currentEventId={currentEventId} refreshCounter={eventCreationSuccessful}/>
                    </div>
                </div>
                <div className="box mt-5">
                    <h2 className="title is-4">Create New Event</h2>
                    {getEventCreationDisplay()}
                </div>
            </div>
        </section>
    </div>);
}

export default LandingPage;
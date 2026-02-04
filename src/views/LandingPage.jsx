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
        setIsLoggedIn(Cookies.get('Authorization') !== null);
    }

    const eventCreationSuccessful = () => {
        setEventsCreatedCount(eventsCreatedCount + 1);
    }

    const getEventCreationDisplay = () => {
        if (isLoggedIn === true) {
            return <EventCreationDisplay eventCreatedSuccessfully={eventCreationSuccessful}
                                         refreshLogin={refreshLogin}/>;
        } else {
            return <p>Log in to create events.</p>;
        }
    }

    return (<div>
        <h1>LandingPage</h1>
        <PageSwapButton onPageSwap={onPageSwap} targetPage='LoginPage' displayName='Login'/>
        <EventsDisplay selectEvent={selectEvent} refreshCounter={eventsCreatedCount}/>
        <EventDisplay currentEventId={currentEventId}/>
        {getEventCreationDisplay()}
    </div>);
}

export default LandingPage;